import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../../core/services/translation.service';

export interface ImageUploadItem {
  id: string;
  file?: File;
  url: string;
  fileName?: string;
  isPrimary: boolean;
  sortOrder: number;
}

@Component({
  selector: 'app-image-uploader',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './image-uploader.html',
  styleUrl: './image-uploader.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageUploader {
  private readonly translationService = inject(TranslationService);

  @Input() images: ImageUploadItem[] = [];
  @Input() maxImages = 10;
  @Input() maxFileSizeMB = 5;
  @Input() accept = 'image/jpeg,image/png,image/webp';
  @Input() disabled = false;
  @Output() imagesChange = new EventEmitter<ImageUploadItem[]>();
  @Output() imageRemoved = new EventEmitter<ImageUploadItem>();
  @Output() primaryChanged = new EventEmitter<ImageUploadItem>();
  @Output() validationError = new EventEmitter<string>();
  isDragOver = false;
  private readonly allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

  onFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    this.addFiles(Array.from(input.files));
    input.value = '';
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (this.disabled) {
      return;
    }
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    if (this.disabled) {
      return;
    }
    const files = Array.from(event.dataTransfer?.files ?? []);
    if (!files.length) {
      return;
    }
    this.addFiles(files);
  }

  private addFiles(files: File[]): void {
    const remainingSlots = this.maxImages - this.images.length;
    if (remainingSlots <= 0) {
      this.validationError.emit(
        this.translationService.translate('messages.uploadMaxImages', { count: this.maxImages }),
      );
      return;
    }
    const filesToAdd = files.slice(0, remainingSlots);
    if (files.length > remainingSlots) {
      this.validationError.emit(
        this.translationService.translate('messages.uploadRemainingImages', {
          count: remainingSlots,
        }),
      );
    }
    const newImages: ImageUploadItem[] = [];
    for (const file of filesToAdd) {
      const validationError = this.validateFile(file);
      if (validationError) {
        this.validationError.emit(validationError);
        continue;
      }
      const image: ImageUploadItem = {
        id: this.generateId(),
        file,
        url: URL.createObjectURL(file),
        fileName: file.name,
        isPrimary: this.images.length === 0 && newImages.length === 0,
        sortOrder: this.images.length + newImages.length,
      };
      newImages.push(image);
    }
    if (!newImages.length) {
      return;
    }
    const updatedImages = [...this.images, ...newImages];
    this.emitImages(updatedImages);
  }

  private validateFile(file: File): string | null {
    if (!this.allowedTypes.includes(file.type)) {
      return this.translationService.translate('messages.uploadInvalidType', { file: file.name });
    }
    const maxSize = this.maxFileSizeMB * 1024 * 1024;
    if (file.size > maxSize) {
      return this.translationService.translate('messages.uploadMaxSize', {
        file: file.name,
        size: this.maxFileSizeMB,
      });
    }
    return null;
  }

  removeImage(image: ImageUploadItem): void {
    if (this.disabled) {
      return;
    }
    if (image.file && image.url.startsWith('blob:')) {
      URL.revokeObjectURL(image.url);
    }
    let updatedImages = this.images.filter((item) => item.id !== image.id);
    if (image.isPrimary && updatedImages.length > 0) {
      updatedImages = updatedImages.map((item, index) => ({ ...item, isPrimary: index === 0 }));
    }
    updatedImages = this.reorderImages(updatedImages);
    this.imageRemoved.emit(image);
    this.emitImages(updatedImages);
  }

  setPrimary(image: ImageUploadItem): void {
    if (this.disabled) {
      return;
    }
    const updatedImages = this.images.map((item) => ({ ...item, isPrimary: item.id === image.id }));
    this.primaryChanged.emit(image);
    this.emitImages(updatedImages);
  }

  onDragImageStart(event: DragEvent, image: ImageUploadItem): void {
    if (this.disabled) {
      return;
    }
    event.dataTransfer?.setData('text/plain', image.id);
  }

  onDropImage(event: DragEvent, targetImage: ImageUploadItem): void {
    event.preventDefault();
    if (this.disabled) {
      return;
    }
    const sourceId = event.dataTransfer?.getData('text/plain');
    if (!sourceId || sourceId === targetImage.id) {
      return;
    }
    const sourceIndex = this.images.findIndex((image) => image.id === sourceId);
    const targetIndex = this.images.findIndex((image) => image.id === targetImage.id);
    if (sourceIndex === -1 || targetIndex === -1) {
      return;
    }
    const updatedImages = [...this.images];
    const [movedImage] = updatedImages.splice(sourceIndex, 1);
    updatedImages.splice(targetIndex, 0, movedImage);
    this.emitImages(this.reorderImages(updatedImages));
  }

  private reorderImages(images: ImageUploadItem[]): ImageUploadItem[] {
    return images.map((image, index) => ({ ...image, sortOrder: index }));
  }

  private emitImages(images: ImageUploadItem[]): void {
    this.images = images;
    this.imagesChange.emit(images);
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }
}

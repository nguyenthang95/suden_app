import { ChangeDetectorRef, Pipe, PipeTransform, inject } from '@angular/core';

import { TranslationService } from '../../core/services/translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  private readonly translationService = inject(TranslationService);
  private readonly cdr = inject(ChangeDetectorRef);

  private currentLanguage = this.translationService.language();

  constructor() {
    this.translationService.language();
  }

  transform(key: string, params?: Record<string, string | number>): string {
    const language = this.translationService.language();

    if (language !== this.currentLanguage) {
      this.currentLanguage = language;

      queueMicrotask(() => {
        this.cdr.markForCheck();
      });
    }

    return this.translationService.translate(key, params);
  }
}

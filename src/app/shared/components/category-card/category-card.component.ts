import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../../core/models/models';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
})
export class CategoryCardComponent {
  category = input.required<Category>();
}

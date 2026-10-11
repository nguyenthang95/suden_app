import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { Language, TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, TranslatePipe],
  templateUrl: './storefront-layout.component.html',
  styleUrl: './storefront-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorefrontLayoutComponent {
  private readonly _cart = inject(CartService);
  private readonly _auth = inject(AuthService);
  private readonly _router = inject(Router);
  private readonly _translationService = inject(TranslationService);

  menu = signal(false);
  keyword = signal('');
  search(e: Event) {
    e.preventDefault();
    this._router.navigate(['/products'], { queryParams: { search: this.keyword() } });
  }
  currentYear = new Date().getFullYear();

  constructor() {}

  get language(): Language {
    return this._translationService.language();
  }

  changeLanguage(language: Language): void {
    this._translationService.setLanguage(language);
  }

  get cartCount(): number {
    return this._cart.cartCount();
  }
}

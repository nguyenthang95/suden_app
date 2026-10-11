import { Component, inject, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CartService } from "../../../core/services/cart.service";
import { Product } from "../../../core/models/models";
import { TranslatePipe } from "../../pipes/translate.pipe";
@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();

  constructor(private _cartService: CartService) {}

  add() {
    this._cartService.add(this.product());
  }
}

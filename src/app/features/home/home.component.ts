import { Component, inject, computed } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CategoryService } from "../../core/services/category.service";
import { ProductService } from "../../core/services/product.service";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { CategoryCardComponent } from "../../shared/components/category-card/category-card.component";
import { TranslatePipe } from "../../shared/pipes/translate.pipe";
@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductCardComponent,
    CategoryCardComponent,
    TranslatePipe
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  private cs = inject(CategoryService);
  private ps = inject(ProductService);
  roots = computed(() =>
    this.cs.getRootCategories().filter((x) => x.id !== "cat-pet"),
  );
  featured = computed(() =>
    this.ps
      .products()
      .filter((x) => x.featured)
      .slice(0, 8),
  );
}

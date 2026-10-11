import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, Breadcrumb, TranslatePipe],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
})
export class AdminLayoutComponent {
  private auth = inject(AuthService);
  logout() {
    this.auth.logout();
    location.href = '/login';
  }
}

import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  error = signal('');
  form = this.fb.nonNullable.group({
    email: ['customer@example.com', [Validators.required, Validators.email]],
    password: ['Customer@123', Validators.required],
  });
  submit() {
    if (this.auth.login(this.form.value.email!, this.form.value.password!)) {
      this.router.navigate([this.auth.hasRole('ADMIN') ? '/admin' : '/']);
    } else this.error.set('auth.invalidCredentials');
  }
}

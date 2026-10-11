import { Injectable, signal, computed } from '@angular/core';
import { User } from '../models/models';
import { USERS } from '../mock/users.mock';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private current = signal<User | null>(null);
  user = this.current.asReadonly();
  isAuthenticated = computed(() => !!this.current());

  constructor(private _storageService: StorageService) {
    this.current.set(this._storageService.get<User | null>('auth_user', null));
  }

  login(email: string, password: string) {
    const u = USERS.find((x) => x.email === email && x.password === password);
    if (!u) return false;
    const safe = { ...u, password: '' };
    this.current.set(safe);
    this._storageService.set('auth_user', safe);
    return true;
  }
  logout() {
    this.current.set(null);
    this._storageService.remove('auth_user');
  }
  register(name: string, email: string, password: string) {
    if (USERS.some((x) => x.email === email)) return false;
    const u: User = { id: `u-${Date.now()}`, name, email, password, role: 'CUSTOMER' };
    USERS.push(u);
    return this.login(email, password);
  }
  getCurrentUser() {
    return this.current();
  }
  hasRole(role: User['role']) {
    return this.current()?.role === role;
  }
}

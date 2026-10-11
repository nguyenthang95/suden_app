import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Language = 'vi' | 'en';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly STORAGE_KEY = 'app-language';
  private readonly DEFAULT_LANGUAGE: Language = 'vi';

  private translations = signal<Record<string, any>>({});
  readonly language = signal<Language>(this.DEFAULT_LANGUAGE);

  constructor(private http: HttpClient) {
    this.init();
  }

  private init(): void {
    const savedLanguage = localStorage.getItem(this.STORAGE_KEY) as Language | null;

    const language: Language =
      savedLanguage === 'en' || savedLanguage === 'vi' ? savedLanguage : this.DEFAULT_LANGUAGE;

    this.loadLanguage(language);
  }

  setLanguage(language: Language): void {
    if (language === this.language()) {
      return;
    }

    localStorage.setItem(this.STORAGE_KEY, language);
    this.loadLanguage(language);
  }

  toggleLanguage(): void {
    const nextLanguage: Language = this.language() === 'vi' ? 'en' : 'vi';

    this.setLanguage(nextLanguage);
  }

  private loadLanguage(language: Language): void {
    this.http.get<Record<string, any>>(`i18n/${language}.json`).subscribe({
      next: (translations) => {
        this.translations.set(translations);
        this.language.set(language);
      },

      error: (error) => {
        console.error(`Failed to load language: ${language}`, error);

        if (language !== this.DEFAULT_LANGUAGE) {
          this.loadLanguage(this.DEFAULT_LANGUAGE);
        }
      },
    });
  }

  translate(key: string, params?: Record<string, string | number>): string {
    const value = this.getValue(key);

    if (value === undefined || value === null) {
      return key;
    }

    let result = String(value);

    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        result = result.replace(new RegExp(`\\{${param}\\}`, 'g'), String(value));
      });
    }

    return result;
  }

  private getValue(key: string): unknown {
    const keys = key.split('.');
    let value: any = this.translations();

    for (const item of keys) {
      if (value == null || typeof value !== 'object') {
        return undefined;
      }

      value = value[item];
    }

    return value;
  }
}

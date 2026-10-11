import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface BreadcrumbItem {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Breadcrumb {
  private router = inject(Router);

  private activatedRoute = inject(ActivatedRoute);

  breadcrumbs$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    startWith(null),
    map(() => this.buildBreadcrumbs()),
  );

  private buildBreadcrumbs(): BreadcrumbItem[] {
    const breadcrumbs: BreadcrumbItem[] = [];

    let route = this.activatedRoute;

    while (route.firstChild) {
      route = route.firstChild;

      const breadcrumb = route.snapshot.data['breadcrumb'];

      if (breadcrumb) {
        breadcrumbs.push({
          label: breadcrumb,
          url: this.buildUrl(route),
        });
      }
    }

    return breadcrumbs;
  }

  private buildUrl(route: ActivatedRoute): string {
    const segments: string[] = [];

    let current: ActivatedRoute | null = route;

    while (current) {
      const path = current.snapshot.routeConfig?.path;

      if (path && !path.includes(':')) {
        segments.unshift(path);
      }

      current = current.parent;
    }

    return '/' + segments.join('/');
  }
}

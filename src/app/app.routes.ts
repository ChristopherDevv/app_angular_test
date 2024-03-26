import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'products', loadComponent: () => import('./views/products/products.component')},
    { path: 'card', loadComponent: () => import('./views/card/card.component')},
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

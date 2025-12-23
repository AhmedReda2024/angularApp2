import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((c) => c.Home),
    title: 'Home',
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then((c) => c.About),
    title: 'About',
  },
  {
    path: 'gallery',
    loadComponent: () => import('./components/gallery/gallery').then((c) => c.Gallery),
    title: 'Gallery',
    children: [
      {
        path: '',
        redirectTo: 'tv',
        pathMatch: 'full',
      },
      {
        path: 'tv',
        loadComponent: () => import('./components/gallery/categories/tv/tv').then((c) => c.Tv),
      },
      {
        path: 'mobile',
        loadComponent: () =>
          import('./components/gallery/categories/mobile/mobile').then((c) => c.Mobile),
      },
      {
        path: 'laptop',
        loadComponent: () =>
          import('./components/gallery/categories/laptop/laptop').then((c) => c.Laptop),
      },
    ],
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact').then((c) => c.Contact),
    title: 'Contact',
  },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products').then((c) => c.Products),
    title: 'Products',
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./components/portfolio/portfolio').then((c) => c.Portfolio),
    title: 'Portfolio',
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found').then((c) => c.NotFound),
    title: 'Error',
  },
];

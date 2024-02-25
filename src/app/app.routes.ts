import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    loadComponent: () => import('./pages/landing/landing.page').then((m) => m.LandingPage),
  },
  {
    path: 'character-creation',
    loadComponent: () => import('./pages/character-creation/character-creation.page').then((m) => m.CharacterCreationPage),
  },
  {
    path: 'overview',
    loadChildren: () => import('./pages/overview/overview.module').then( m => m.OverviewModule),
  },

  // {
  //   path: 'overview/profile',
  //   loadComponent: () => import('./pages/overview/character-profile/character-profile.page').then( m => m.CharacterProfilePage)
  // },
  // {
  //   path: 'overview/explore',
  //   loadComponent: () => import('./pages/overview/exploration/exploration.page').then( m => m.ExplorationPage)
  // },
  // {
  //   path: 'overview/base',
  //   loadComponent: () => import('./pages/overview/base-management/base-management.page').then( m => m.BaseManagementPage)
  // },
  // {
  //   path: 'overview/resource',
  //   loadComponent: () => import('./pages/overview/resource-management/resource-management.page').then( m => m.ResourceManagementPage)
  // },



];

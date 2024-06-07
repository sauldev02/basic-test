import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './features/dashboard/pages/change-detection/change-detection.component'
          ),
      },

      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import(
            './features/dashboard/pages/control-flow/control-flow.component'
          ),
      },

      {
        path: 'defer-option',
        title: 'Defer option',
        loadComponent: () =>
          import(
            './features/dashboard/pages/control-flow/control-flow.component'
          ),
      },

      {
        path: 'defer-option',
        title: 'Defer option',
        loadComponent: () =>
          import(
            './features/dashboard/pages/defer-option/defer-option.component'
          ),
      },

      {
        path: 'defer-views',
        title: 'Defer views',
        loadComponent: () =>
          import(
            './features/dashboard/pages/defer-views/defer-views.component'
          ),
      },

      {
        path: 'user',
        title: 'User',
        loadComponent: () =>
          import('./features/dashboard/pages/user/user.component'),
      },

      {
        path: 'user/:id',
        title: 'User View',
        loadComponent: () =>
          import('./features/dashboard/pages/user/user.component'),
      },

      {
        path: 'user-list',
        title: 'User View',
        loadComponent: () =>
          import('./features/dashboard/pages/user/user.component'),
      },

      {
        path: 'view-transition',
        title: 'View transition',
        loadComponent: () =>
          import(
            './features/dashboard/pages/view-transition/view-transition.component'
          ),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

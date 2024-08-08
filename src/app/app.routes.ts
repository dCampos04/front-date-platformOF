import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    children:[
      {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./home/login-admin/login-admin.component').then(m => m.LoginAdminComponent),
      },
    ]
  },
  {
    path: 'admin-view',
    loadComponent: () => import('./admin-view/admin-view.component').then(m => m.AdminViewComponent),
    children:[
      {
        path: 'admin-config',
        title: 'Admin Config',
        loadComponent: () => import('./admin-view/pages/admin-config/admin-config.component').then(m => m.AdminConfigComponent),
      },
      {
        path: 'admin-calendar',
        title: 'Admin Calendar',
        loadComponent: () => import('./admin-view/pages/admin-calendar/admin-calendar.component').then(m => m.AdminCalendarComponent),
      },
      {
        path: 'admin-categories',
        title: 'Admin Categories',
        loadComponent: () => import('./admin-view/pages/admin-categories/admin-categories.component').then(m => m.AdminCategoriesComponent),
      },
      {
        path: 'admin-places',
        title: 'Admin Places',
        loadComponent: () => import('./admin-view/pages/admin-places/admin-places.component').then(m => m.AdminPlacesComponent),
      },
      {
        path: 'admin-roles',
        title: 'Admin Roles',
        loadComponent: () => import('./admin-view/pages/admin-roles/admin-roles.component').then(m => m.AdminRolesComponent),
      },
      {
        path: 'admin-services',
        title: 'Admin Services',
        loadComponent: () => import('./admin-view/pages/admin-services/admin-services.component').then(m => m.AdminServicesComponent),
      },
      {
        path: 'admin-users',
        title: 'Admin Users',
        loadComponent: () => import('./admin-view/pages/admin-users/admin-users.component').then(m => m.AdminUsersComponent),
      },
      {
        path: '',
        redirectTo: 'admin-config',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'client-view',
    loadComponent: () => import('./client-view/client-view.component').then(m => m.ClientViewComponent),
  },



  {
    path: '',
    redirectTo: '/home/login',
    pathMatch: 'full'
  }
];

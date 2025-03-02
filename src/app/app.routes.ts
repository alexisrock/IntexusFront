import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '',  loadChildren:() => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'home',  loadChildren:() => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'create',  loadChildren:() => import('./tareas/create/create/create.module').then(m => m.CreateModule)},
];

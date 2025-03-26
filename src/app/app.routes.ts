import { Routes } from '@angular/router';
import { AuthService } from './service/auth.service';


export const routes: Routes = [
  { path: '',  loadChildren:() => import('./login/login.module').then(m => m.LoginModule)},

  { path: 'usuario',  loadChildren:() => import('./usuario/usuario.module').then(m => m.UsuarioModule)},
  { path: 'home', canActivate: [AuthService],  loadChildren:() => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'create',canActivate: [AuthService],  loadChildren:() => import('./tareas/create/create/create.module').then(m => m.CreateModule)},
];

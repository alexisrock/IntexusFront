import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './listUsuario/usuarios.component';
import { AuthService } from '../service/auth.service';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { CreateUserComponent } from './create/createUser.component';

export const routes: Routes = [
  { path: '', component: RegistrarUsuarioComponent},
  { path: 'usuarios',canActivate: [AuthService], component: UsuariosComponent},
  { path: 'create',canActivate: [AuthService], component: CreateUserComponent},

];



@NgModule({
  declarations: [],
  imports: [
     CommonModule,
     RouterModule.forChild(routes)
  ]
})
export class UsuarioModule { }

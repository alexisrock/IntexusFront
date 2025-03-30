import { Component } from '@angular/core';
import { MenuComponent } from "../../Shared/menu/menu.component";
import { RouterModule } from '@angular/router';
import { UserResponse } from '../../model/Response/userResponse';
import { NgFor } from '@angular/common';
import { BackService } from '../../service/backservice';

@Component({
  selector: 'app-usuarios',
  imports: [NgFor, MenuComponent, RouterModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

  usuarios: UserResponse[] = []

  constructor(private readonly service: BackService) {
    this.getAllUsers()
  }


  getAllUsers(){
    this.service.GetAllusuarios()
    .subscribe({
      next: (data)  =>{
        this.usuarios = data
      }, error: (error)  =>{
      }
    })
  }


  eliminarUsuario(idUsuario: number){
    this.service.EliminarUsuario(idUsuario)
    .subscribe({
      next: (data)  =>{
        this.getAllUsers()
      }, error: (error)  =>{
      }
    })
  }


}

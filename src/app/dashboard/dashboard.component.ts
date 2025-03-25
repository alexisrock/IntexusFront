import { Component } from '@angular/core';

import { ListComponent } from '../tareas/list/list.component';
import { BackService } from '../service/backservice';

import { CommonModule } from '@angular/common';
import { MenuComponent } from "../Shared/menu/menu.component";

@Component({
  selector: 'app-dashboard',
  imports: [ListComponent, CommonModule, MenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {



  constructor(private readonly backService: BackService) {

    this.GetTareas();
    this.GetTareasAsignadas();

  }




  GetTareas() {
    this.backService.GetAllTareas()
      .subscribe({
        next: (data) => {
          this.backService.setCurrentTareas(data)
        },
        error: (error) => {

        }
      })
  }


  GetTareasAsignadas() {
    this.backService.GetAllTareasAsignadas()
      .subscribe({
        next: (data) => {
          this.backService.setCurrentTareasAsignadas(data)
        },
        error: (error) => {

        }
      })
  }


  UpdataLista() {
    this.GetTareas();
  }

  UpdateAsignacionTareas(){
    this.GetTareasAsignadas();
  }

}

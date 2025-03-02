import { Component, ContentChild, TemplateRef } from '@angular/core';
import { MenuComponent } from '../Shared/menu/menu.component';
import { ListComponent } from '../tareas/list/list.component';
import { BackService } from '../service/backservice';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [MenuComponent, ListComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {



  constructor(private readonly backService: BackService) {

    this.GetTareas();


  }




  GetTareas(){
    this.backService.GetAllTareas()
    .subscribe({
      next: (data) =>{
         this.backService.setCurrentTareas(data)
      },
      error: (error)=>{

      }})
  }






  UpdataLista(){
    this.GetTareas();
  }


}

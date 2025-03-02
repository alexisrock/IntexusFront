import { BackService } from '../../service/backservice';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Tareas } from '../../model/Response/tareasListResponse';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';
import { TareaCheck } from '../../model/Request/tareaCheck';



@Component({
  selector: 'app-list',
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent implements  OnDestroy {
  @Output() event = new EventEmitter<void>();



  tareas: Tareas[] = [];
  filteredTareas: Tareas[] = [];

  private readonly tareaserviceSubscription: Subscription | undefined;
  constructor(private readonly backService: BackService) {
    this.tareaserviceSubscription = this.backService.currentTareas.subscribe(
      subCurrent =>{
        this.tareas = subCurrent
        this.filteredTareas = this.tareas
      }
    )

  }

  ngOnDestroy(): void {
    this.tareaserviceSubscription?.unsubscribe();
  }


   checkTareacompletada(idTarea: number){
    this.backService.loadingOn();
    let request= {} as TareaCheck;
    request.IdTarea = idTarea
    request.IsCompleted = true
    this.backService.checkTareaCompletada(request)
    .subscribe({
      next: (data) =>{
          this.event.emit();
      },
      error: (error) =>{

      }
    })
  }


  EliminarTarea(idTarea: number){
    this.backService.EliminarTarea(idTarea)
    .subscribe({
      next: (data) =>{
        this.event.emit();
      },
      error: (error) =>{

      }
    })
  }

  FiltrarLista(isCompleted: boolean| null){
    if (isCompleted === null) {
       this.filteredTareas = this.tareas
    } else {
      this.filteredTareas = this.tareas.filter(data => data.IsCompleted === isCompleted);
    }


  }



}

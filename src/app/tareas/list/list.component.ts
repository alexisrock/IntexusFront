import { BackService } from '../../service/backservice';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Tareas } from '../../model/Response/tareasListResponse';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';
import { TareaCheck } from '../../model/Request/tareaCheck';
import { AsignacionTareaRequest } from '../../model/Request/asignacionTareaRequest';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-list',
  imports: [NgFor, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent implements  OnDestroy {
  @Output() event = new EventEmitter<void>();
  @Output() eventAsignacion = new EventEmitter<void>();

 component: number = 1

  tareas: Tareas[] = [];
  tareasAsignadas: AsignacionTareaRequest[] = []


  private tareaserviceSubscription: Subscription | undefined;
  private tareaAsignadasserviceSubscription: Subscription | undefined;

  constructor(private readonly backService: BackService, public router: Router) {

    this.initialStates();
  }

  initialStates(){
    this.tareaserviceSubscription = this.backService.currentTareas.subscribe(
      subCurrent =>{
        this.tareas = subCurrent
      })

    this.tareaAsignadasserviceSubscription = this.backService.currentTareasAsingnadas.subscribe(
      tarAsig =>{
        this.tareasAsignadas = tarAsig
      })
  }


  ngOnDestroy(): void {
    this.tareaserviceSubscription?.unsubscribe();
    this.tareaAsignadasserviceSubscription?.unsubscribe();
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


  cambiarTablaTareas(tabla: number){
    this.component = tabla;
  }


  eliminarAsignacionTarea(idAsignacion: number){
    this.backService.EliminarAsignacionTarea(idAsignacion)
    .subscribe({
      next: (data) =>{
        this.eventAsignacion.emit();
      },
      error: (error) =>{

      }
    })
  }


  verTareaAsignada(tarea: Tareas){
    this.backService.setCurrentTareasinAsignar(tarea);
    this.backService.setCurrentIsTareasinAsignar(false)
    this.router.navigate(['create/editarTarea']);
  }


}

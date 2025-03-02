import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tareas, tareasListResponse } from '../model/Response/tareasListResponse';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseResponse } from '../model/Response/baseResponse';
import { TareaCheck } from '../model/Request/tareaCheck';
import { TareaRequest } from '../model/Request/tareaRequest';


@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private readonly httpclient: HttpClient) { }

  urlBase: string = "https://localhost:44342/";
  private readonly loadingSubject =  new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  private readonly currentTareasSubject: BehaviorSubject<Tareas[]> =  new BehaviorSubject({} as Tareas[]);
  public readonly currentTareas: Observable<Tareas[]> = this.currentTareasSubject.asObservable();


  setCurrentTareas(tareasCurrent: Tareas[]): void {
    this.currentTareasSubject.next(tareasCurrent);
  }


  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }


  GetAllTareas(){
    return this.httpclient.get<tareasListResponse>(this.urlBase+'api/Tarea/GetAll');
  }

  checkTareaCompletada(request: TareaCheck){
    return this.httpclient.patch<BaseResponse>(this.urlBase+'api/Tarea/Update', request );
  }


  EliminarTarea(id:number){
    return this.httpclient.delete<BaseResponse>(this.urlBase+'api/Tarea/Delete/'+id );
  }

  CrearTarea(request: TareaRequest){
    return this.httpclient.post<BaseResponse>(this.urlBase+'api/Tarea/Create', request );
  }



}

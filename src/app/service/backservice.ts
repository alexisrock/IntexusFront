import { UserCreateRequest, UserupdateRequest } from './../model/Request/userCreateRequest';
import { AuthenticationRequest } from './../model/Request/authenticationRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tareas, tareasListResponse } from '../model/Response/tareasListResponse';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseResponse } from '../model/Response/baseResponse';
import { TareaCheck } from '../model/Request/tareaCheck';
import { TareaRequest } from '../model/Request/tareaRequest';
import { AuthenticationResponse } from '../model/Response/authenticationResponse';
import { AsignacionTareaRequest, ListAsignacionTareaRequest } from '../model/Request/asignacionTareaRequest';
import { UserListResponse } from '../model/Response/userResponse';
import { TareaUpdateRequest } from '../model/Request/tareaupdateRequest';
import { AsignacionTareasCreateRequest } from '../model/Request/asignacionTareasCreateRequest';


@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private readonly httpclient: HttpClient) { }

  urlBase: string = "https://homeworkbackend-ethfhmdnegbdf3h5.eastus2-01.azurewebsites.net/";
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  private readonly currentTareasSubject: BehaviorSubject<Tareas[]> = new BehaviorSubject({} as Tareas[]);
  public readonly currentTareas: Observable<Tareas[]> = this.currentTareasSubject.asObservable();


  private readonly currentTareasasignadasSubject: BehaviorSubject<AsignacionTareaRequest[]> = new BehaviorSubject({} as AsignacionTareaRequest[]);
  public readonly currentTareasAsingnadas: Observable<AsignacionTareaRequest[]> = this.currentTareasasignadasSubject.asObservable();


  private readonly currentTareaSinAsignarSubject: BehaviorSubject<Tareas> = new BehaviorSubject({} as Tareas);
  public readonly currentTareaSinAsingnar: Observable<Tareas> = this.currentTareaSinAsignarSubject.asObservable();

  private readonly currentIsTareaSinAsignarSubject: BehaviorSubject<boolean> = new BehaviorSubject({} as boolean);
  public readonly currentIsTareaSinAsingnar: Observable<boolean> = this.currentIsTareaSinAsignarSubject.asObservable();


  setCurrentTareas(tareasCurrent: Tareas[]): void {
    this.currentTareasSubject.next(tareasCurrent);
  }

  setCurrentTareasAsignadas(tarasAsignadas: AsignacionTareaRequest[]) {
    this.currentTareasasignadasSubject.next(tarasAsignadas);
  }

  setCurrentTareasinAsignar(tareasinAsignar: Tareas){
    this.currentTareaSinAsignarSubject.next(tareasinAsignar)
  }

  setCurrentIsTareasinAsignar(isTareasinAsignar: boolean){
    this.currentIsTareaSinAsignarSubject.next(isTareasinAsignar)
  }




  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }




  Login(request: AuthenticationRequest) {
    return this.httpclient.post<AuthenticationResponse>(this.urlBase + 'api/Authentication/Authentication', request);
  }

  crearUsuario(request: UserCreateRequest) {
    return this.httpclient.post<BaseResponse>(this.urlBase + 'api/Authentication/Create', request);
  }

  GetAllTareas() {
    return this.httpclient.get<tareasListResponse>(this.urlBase + 'api/AsignarTarea/GetAllTareasSinAsignar');
  }

  GetAllTareasAsignadas() {
    return this.httpclient.get<ListAsignacionTareaRequest>(this.urlBase + 'api/AsignarTarea/GetAllTareasAsignadas');
  }


  checkTareaCompletada(request: TareaCheck) {
    return this.httpclient.patch<BaseResponse>(this.urlBase + 'api/Tarea/Update', request);
  }


  EliminarTarea(id: number) {
    return this.httpclient.delete<BaseResponse>(this.urlBase + 'api/Tarea/Delete/' + id);
  }

  CrearTarea(request: TareaRequest) {
    return this.httpclient.post<BaseResponse>(this.urlBase + 'api/Tarea/Create', request);
  }

  EliminarAsignacionTarea(idAsignacion: number){
    return this.httpclient.delete<BaseResponse>(this.urlBase + `api/AsignarTarea/Delete/${idAsignacion}`);
  }

  GetAllusuarios() {
    return this.httpclient.get<UserListResponse>(this.urlBase + 'api/Usuario/GetAll');
  }

  EditarTarea(request: TareaUpdateRequest) {
    return this.httpclient.patch<BaseResponse>(this.urlBase + 'api/Tarea/Update', request);
  }

  AsignarTarea(request: AsignacionTareasCreateRequest){
    return this.httpclient.post<BaseResponse>(this.urlBase + 'api/AsignarTarea/Create', request);
  }

  EliminarUsuario(idUser:number){
    return this.httpclient.delete<BaseResponse>(this.urlBase + `api/Usuario/Delete/${idUser}`);
  }

  EditarUsuario(User:UserupdateRequest){
    return this.httpclient.put<BaseResponse>(this.urlBase + 'api/Usuario/update', User);
  }

}

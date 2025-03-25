import { Component } from '@angular/core';
import { MenuComponent } from "../../Shared/menu/menu.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Tareas } from '../../model/Response/tareasListResponse';
import { BackService } from '../../service/backservice';
import { UserResponse } from '../../model/Response/userResponse';


@Component({
  selector: 'app-asignar-tarea-edit',
  imports: [MenuComponent, ReactiveFormsModule],
  templateUrl: './tarea-edit.component.html',
  styleUrl: './tarea-edit.component.scss'
})
export class TareaEditComponent {

  fg!: FormGroup
  tareas: Tareas[] = [];
  tarea = {} as Tareas;
  usuarios: UserResponse[] = [];
  IsTareaEdit: boolean = false

  private tareaPorAsignarserviceSubscription: Subscription | undefined;
  private tareaIsPorAsignarserviceSubscription: Subscription | undefined;

  constructor(private readonly backService: BackService) {
    this.initialComponent()

  }

  initialComponent() {
    this.fg = new FormGroup({
      NameTarea: new FormControl(['', [Validators.required]]),
      Usuario: new FormControl(['', [Validators.required]]),
      DescriptionTarea: new FormControl('')
    })


    this.backService.GetAllusuarios().subscribe({

      next: (data)=>{
        this.usuarios = data.filter(x=> x.Idrol != 3 )
      }, error: (error)=>{

      }

    })


    this.backService.GetAllTareasAsignadas()
    .subscribe({
      next: (data) => {
     this.tareas = data
      },
      error: (error) => {

      }
    })


    this.tareaIsPorAsignarserviceSubscription = this.backService.currentIsTareaSinAsingnar.subscribe(
      isTareas => {
        this.IsTareaEdit = isTareas
      })


    this.tareaPorAsignarserviceSubscription = this.backService.currentTareaSinAsingnar.subscribe(
      tarea => {
        if (tarea) {
            this.fg.patchValue({
            NameTarea: tarea.NameTarea || '',
            DescriptionTarea: tarea.DescriptionTarea || '',
            Usuario: ''
          });
        }
      })


  }



}

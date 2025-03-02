export type tareasListResponse = Tareas[]

export interface Tareas {
  IdTarea: number
  NameTarea: string
  DescriptionTarea: string
  IsCompleted: boolean
}

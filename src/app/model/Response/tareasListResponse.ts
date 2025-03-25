export type tareasListResponse = Tareas[]

export interface Tareas {
  Id: number
  NameTarea: string
  DescriptionTarea: string
  IsCompleted: boolean
}

export type TodoType = { 
    id: number
    data?: string
    status?: boolean
    date?: string
    time?: string 
  }

type ActionType =  {
    type: 'adding' | 'delete' | 'setLocal' | 'status'
    payload: {
        id?: number
        data?: string
        mainData?: TodoType[]
    }
} 

type ClearType = {
    type: 'clear'
}
  
export type FinalActionType = ClearType | ActionType ;
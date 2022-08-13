import { FinalActionType, TodoType } from "../types/Types";
import { currentYear, currentDay, currentMonth, currentDate, currentTime } from "../utils/GetDate";

export const initialState: TodoType[] = [];

export function reducer (todos: TodoType[], action: FinalActionType) {

  switch(action.type){
    case 'adding':
      return [...todos, {id: Date.now(), data: action.payload.data, status: false, date: `${currentDay} - ${currentMonth} ${currentDate}, ${currentYear}`, time: currentTime }];

    case 'delete':
        if(todos.length === 1){
          localStorage.removeItem('localData');
          return [];
        }else{
          return todos.filter(todo => todo.id !== action.payload.id);
        }

    case 'status': 
      return todos.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo, status: !todo.status };
        }
          return todo;
      });
      
    case 'setLocal':
      if(action.payload.mainData === null){
        return todos;
      }
      else{
        return action.payload.mainData as TodoType[];
      }

    case 'clear':
      localStorage.removeItem('localData');
      return [];

    default:
      return todos;
  }
}
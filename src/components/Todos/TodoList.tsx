import { useEffect } from "react"

import { BsX, BsTrash,BsCheck } from "react-icons/bs"
import { FinalActionType, TodoType } from "../../types/Types"
import styles from "./todolist.module.css"

type TodoListProps = {
    todo: TodoType
    todos: TodoType[]
    dispatch: React.Dispatch<FinalActionType>
}

const TodoList = ({todo, todos, dispatch}: TodoListProps) => {

    useEffect(()=>{
        localStorage.setItem('localData', JSON.stringify(todos));
    },[todos]);

  return (
    <div className={styles.todolist_container}>
        <div className={styles.flex_container}>
            <div className={styles.flex_child}>
                <p style={{textDecoration: todo.status ? 'line-through' : 'none', color: todo.status ? 'gray' : ' ' }}>{todo.data}</p>
                <p style={{textDecoration: todo.status ? 'line-through' : 'none', color: todo.status ? 'gray' : ' ' }}>{todo.date} | {todo.time}</p>
            </div>

            <div className={styles.flex_child}>
                <div className={styles.button_container}>
                    <button onClick={()=>  dispatch({type: 'status', payload: {id: todo.id} })}><span>
                        {todo.status ? <BsX size="1.2rem" color="#EDEDED"/> : <BsCheck size="1.2rem" color="#EDEDED"/> }  </span></button>
                    <button onClick={()=> dispatch({type: 'delete', payload: {id: todo.id} })}><span><BsTrash size="1.2rem" color="#EDEDED"/></span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList
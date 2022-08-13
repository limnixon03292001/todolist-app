import React, { useEffect, useState } from 'react'
import { FinalActionType, TodoType } from '../../types/Types'

import styles from './footer.module.css'

type FooterProps = {
    todos: TodoType[]
    dispatch: React.Dispatch<FinalActionType>
}

const Footer = ({ todos, dispatch }: FooterProps) => {
    const [filteredTodo, setFilteredTodo] = useState<Array<TodoType>>([]);

    useEffect(()=>{
       setFilteredTodo(todos.filter(todo => todo.status === false));
    },[todos])

    return (
        <div className={styles.footer_container}>
           {todos.length === 0 ?  <p>No Task....</p> : <p>You have {filteredTodo.length} pending task</p>}
           {todos.length === 0 ? '' : <button onClick={()=> dispatch({type: 'clear'}) }><p>Clear All</p></button> } 
        </div>
    )
}

export default Footer
import { useEffect, useReducer } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TodoList from "./components/Todos/TodoList";
import Footer from "./components/Footer/Footer";
import { initialState, reducer } from "./reducer/reducer";
import './App.css';

function App() {
  
  const [todos, dispatch] = useReducer(reducer, initialState);

  //get all todos in first render
  useEffect(()=>{
    const localdata = JSON.parse(localStorage.getItem('localData') as string);
    console.log(localdata)
    dispatch({type: 'setLocal', payload: { mainData: localdata }});
  },[]);

  console.log('c', todos);
  return (
    <div className="main-container">
      <div className="head">
        <Header />
      </div>
      <div className="form">
        <Form dispatch={dispatch}/>
      </div>
      <div className="todo-list">
        { todos.map(todo => (
            <TodoList key={todo.id} todo={todo} todos={todos} dispatch={dispatch}/>
        ))}
      </div>
      <div className="footer">
          <Footer todos={todos} dispatch={dispatch} />
      </div>
      <div className="developer">
        <p>Developed By: <a href="https://www.facebook.com/limnixon03292001/">Nixon A. Lim</a></p>
      </div>
    </div>
  );
}

export default App;

// "eslintConfig": {
//   "extends": [
//     "react-app",
//     "react-app/jest"
//   ]
// },

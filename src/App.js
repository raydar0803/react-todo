import React, {useState,useEffect} from "react";
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //functions
  const FilterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed == true))
        break;
      case 'uncompleted':
       setFilteredTodos(todos.filter(todo => todo.completed == false)) 
      default:
        setFilteredTodos(todos);
    }
  }
  useEffect( () => {
    FilterHandler();
  }, [todos,status]);
    return ( <div className = "App" >
        <header >
        <h1 > Ray 's To-do List </h1></header> 
        <Form inputText={inputText} todos = {todos} setTodos = {setTodos} setInputText={setInputText}
        setStatus={setStatus} />
        <Todo setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>

        

        </div>

    );
}

export default App;
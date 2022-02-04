import React from 'react';
import Todo1 from './Todo1'
const Todo = ({todos, setTodos,filteredTodos}) => {
    console.log(todos);
    return <div> 
        <div className="todo-container">
      <ul className="todo-list">
         {filteredTodos.map(todo => (
             <Todo1 text={todo.text} todo = {todo} key={todo.id} todos={todos} setTodos={setTodos}/>

         ))}
      </ul>
    </div>
    </div>;
};

export default Todo;
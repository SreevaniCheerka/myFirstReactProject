import React, { useState } from 'react';
import Todolist from './Todolist.css';

function TodoApp() {
    const [input, setInput] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addTodo = (e) =>{
        e.preventDefault();
        if(input !== ""){
        setTodoList([...todoList, input]);
        setInput("");
        }
    }
    const deleteTodo = (indexValue) =>{
        const newTodos = todoList.filter((todoList, index) => index !== indexValue);
        setTodoList(newTodos);
    } 
  return (
    <>
      <div className='todoapp'>
      <center>
      <h1 className='title'> Todo App</h1>
      <div className='input'> 
        <input onChange={(e) => setInput(e.target.value)} 
        type="text" 
        id="todothings" 
        name="todothings"  
        value={input} 
        />  &nbsp; &nbsp;
        <button className='add_btn' onClick={addTodo}>Add</button>
      </div>
      
      <div className='list'>
            <h2>List of Todos</h2>
                {todoList.map((input, index) => (
                <div>
                    <center><h3 key={index}>{input} &nbsp; &nbsp; 
                    <button className='del_btn' onClick={() => deleteTodo(index)}>Del</button>
                    </h3> </center>
                </div>
                ))}
        
      </div>
      </center>

      </div>
    </>
  )
}

export default TodoApp

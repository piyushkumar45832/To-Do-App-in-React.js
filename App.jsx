import AddTodo from "./Comoponents/AddTodo";
import AppName from "./Comoponents/AppName";
import "./App.css";
import TodoItems from "./Comoponents/TodoItems";
import { use, useState } from "react";
import WelcomeMessage from "./Comoponents/WelcomeMessage";
function App(){

const [todoItems,setTodoItems]=useState([]);

const handleNewItem = (itemName,itemduedate)=>{
  const newTodoItem = [
    ...todoItems,{name:itemName,duedate:itemduedate}
  ];
  setTodoItems(newTodoItem);
};

const handleDeleteItem = (todoItemName)=>{
  const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
  setTodoItems(newTodoItems);
};

  return (
  <center className='todo-container'>
    <AppName></AppName>
     <AddTodo onNewItem={handleNewItem}></AddTodo> 
     {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
     <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
  </center>
  );
}
export default App;

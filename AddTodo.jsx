import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";

function AddTodo({onNewItem}){
  const todoNameElement = useRef();
  const duedateElement = useRef();

   const handleAddButtonClicked = (Event)=>{
    Event.preventDefault();
    const todoName = todoNameElement.current.value;
    const duedate = duedateElement.current.value;
    todoNameElement.current.value = "";
    duedateElement.current.value = "";
    onNewItem(todoName,duedate);
   };

  return(
    <div className="container text-center">
          <form className="row ps-row" onSubmit={handleAddButtonClicked}>
          <div className="col-6">
            <input type="text" ref={todoNameElement} placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" ref={duedateElement} />
          </div>
          <div className="col-2">
          <button type="submit" className="btn btn-success ps-button" >
            <IoMdAdd/></button>
       </div>
       </form>
      </div>
  );
}
export default AddTodo;
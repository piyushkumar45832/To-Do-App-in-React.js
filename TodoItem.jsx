import { MdDelete } from "react-icons/md";
function TodoItem({todoName,tododate,onDeleteClick}){
  return( 
        <div className="container">
          <div className="row ps-row">
          <div className="col-6">{todoName}
          </div>
          <div className="col-4">{tododate}
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-danger ps-button"
          onClick={() => onDeleteClick(todoName)}>
            <MdDelete/></button>
       </div>
     </div>
   </div>
  );
}
export default TodoItem;
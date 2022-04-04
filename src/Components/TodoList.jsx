import React, { button } from "react";

const TodoList = (props) => {
  return (
    <>
      <li>
      <button className="deleteButton"onClick={()=>{
          props.onSelect(props.id);
      }}>X</button> &nbsp;
        {props.text}
        
      </li>
      <br></br>
    </>
  );
};

export default TodoList;

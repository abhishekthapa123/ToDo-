import React, { button, useState } from "react";
import TodoList from "./Components/TodoList";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if (inputList != "") {
      setItems((olditems) => {
        return [...olditems, inputList];
      });
      setInputList("");

   
    }
  };
  const deleteItems = (id) => {
    setItems((olditems) => {
      return olditems.filter((arrayElem, index) => {
     
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            value={inputList}
            placeholder="Add a Items"
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {/* <li> {inputList} </li> */}
            {items.map((itemval, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;

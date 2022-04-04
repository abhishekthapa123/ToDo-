import React, { button, useState } from "react";

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

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type="text"  value={inputList}placeholder="Add a Items" onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>
          <ol>
            {/* <li> {inputList} </li> */}
            {items.map((itemval) => {
              return <li> {itemval}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;

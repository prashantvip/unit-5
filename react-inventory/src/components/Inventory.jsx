import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:20,
  });
    // Create add and remove functions here that changes the
    // state.

    const handleStateBooks = (value) =>{
      if(inv.books + value < 0){
        return
      }
      setInv((previousState) => {
        return {...previousState , books:inv.books +value}
      })
    }
    const handleStateNoteBooks = (value) =>{
      if(inv.notebooks + value < 0){
        return
      }
      setInv((previousState) => {
        return {...previousState , notebooks:inv.notebooks +value}
      })
    }
    const handleStatePens = (value) =>{
      if(inv.pens + value < 0){
        return
      }
      setInv((previousState) => {
        return {...previousState , pens:inv.pens +value}
      })
    }
    const handleStateInkPens = (value) =>{
      if(inv.inkpens + value < 0){
        return
      }
      setInv((previousState) => {
        return {...previousState , inkpens:inv.inkpens +value}
      })
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() =>{handleStateBooks(1)}}>+</button>
        <button className="circlularButton" onClick={() =>{handleStateBooks(-1)}}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() =>{handleStateNoteBooks(1)}}>+</button>
        <button className="circlularButton" onClick={() =>{handleStateNoteBooks(-1)}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() =>{handleStatePens(1)}}>+</button>
        <button className="circlularButton" onClick={() =>{handleStatePens(-1)}}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={() =>{handleStateInkPens(1)}}>+</button>
        <button className="circlularButton" onClick={() =>{handleStateInkPens(-1)}}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens + inv.inkpens}
    </div>
  );
};
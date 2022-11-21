import React from "react";
import Expenseitem from "./Expenseitem";
import "./Expenlist.css";

const Expenlist = (props) => {
  
  if(props.items.length !== 0) {
    return <h2 className="expen-list_fallback">Found no expen</h2>;
  }
  else{
     return (
    <ul className="expen-list">
      {props.items.map((expen) => (
        <Expenseitem
          key={expen.id}
          name={expen.name}
          tech={expen.tech}
          com={expen.com}
          date={expen.date}
        ></Expenseitem>
      ))}
      ;
    </ul>
  );}
 
};

export default Expenlist;

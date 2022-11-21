import React , {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './Expenseitem.css';

const Expenseitem = (props) =>{
  let [tech,settitle] = useState(props.tech);  
  let [com,setcom] = useState(props.com);

  const clickhandler = () =>{
   settitle("Updated !!");
   setcom("Updated Company")
    console.log(tech);
    console.log(com);
   
  };
  return (
    <Card className='expen-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expen-item_desc'>
        <h2>
          {props.id}
          <br />
          {props.name}
        </h2>
        <div className='expen-tech_com'>
          {props.tech}
          <br />
          {props.com}
        </div>
      </div>
      <button onClick={clickhandler}>Change it</button>
    </Card>
  );
}
export default Expenseitem;

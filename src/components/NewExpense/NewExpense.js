import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const tosavedata = (expendata) =>{
    const  expen = {
      ...expendata,
     
    };
    props.onadd(expen);
  };
  
  return (
    <div className="new-expen">
      <ExpenseForm  onexpendata={tosavedata}></ExpenseForm>
    </div>
  );
};

export default NewExpense;

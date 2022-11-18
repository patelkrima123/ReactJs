import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [name, setname] = useState("");
  const [tech, setTech] = useState("");
  const [comp, setcomp] = useState("");
  const [date, setdate] = useState("");
  /*const [userinput , setinput] = useState({
    entername:'',
    entertech : '',
    entercomp : '',
    enterdate : '',
  });*/

  const namechnage = (event) => {
    setname(event.target.value);
    /*setinput({
    ...userinput,
    entername : event.target.value,
    
  })
  console.log(setinput);*/
  };
  const Techchange = (event) => {
    setTech(event.target.value);
    /*setinput({
      ...userinput,
      entertech:event.target.value,
    });
    console.log(setinput);*/
  };
  const Compnychange = (event) => {
    setcomp(event.target.value);
  };
  const datechange = (event) => {
    setdate(event.target.value);
  };

  const Onsubmithandler = (event) => {
    event.preventDefault();

    const expen = {
      name: name,
      comp: comp,
      tech: tech,
      date: new Date(date),
    };
   
    props.onexpendata(expen);
    setname('');
    setTech('');
    setcomp('');
    setdate('');
    
  };
 

  return (
    <form onSubmit={Onsubmithandler}>
      <div className="new-expen_controls">
        <div className="new-expen_control">
          <label>Name </label>
          <input type="text" onChange={namechnage} value={name} ></input>
        </div>
        <div className="new-expen_control">
          <label>Technology </label>
          <input type="text" onChange={Techchange} value={tech}></input>
        </div>
        <div className="new-expen_control">
          <label>Company Name </label>
          <input type="text" onChange={Compnychange} value={comp}></input>
        </div>
        <div className="new-expen_control">
          <label>Joining Date</label>
          <input type="date" onChange={datechange} value={date}></input>
        </div>
      </div>
      <div className="new-expen_action">
        <button type="submit">Add Name</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

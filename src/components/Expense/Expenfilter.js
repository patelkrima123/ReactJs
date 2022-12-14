import React from "react";
import "./Expenfilter.css";

const Expenfilter = (props) => {
    const dropdownchange = (event) =>{
        props.onChangefilter(event.target.value);
    }
  return (
    <div className="expen-filter">
      <div className="expen-filter_control">
        <label>Upadte Company Year</label>
        <select value={props.selectd} onChange={dropdownchange}>
          <option value="2016">2019</option>
          <option value="2017">2020</option>
          <option value="2018">2021</option>
          <option value="2019">2022</option>
        </select>
      </div>
    </div>
  );
};

export default Expenfilter;

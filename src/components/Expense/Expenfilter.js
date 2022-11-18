import React from "react";
import "./Expenfilter.css";

const Expenfilter = () => {
  return (
    <div className="expen-filter">
      <div className="expen-filter_control">
        <label>Upadte Company Year</label>
        <select>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default Expenfilter;
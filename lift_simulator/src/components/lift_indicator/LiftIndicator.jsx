import React, { useState } from "react";
import "./LiftIndicator.css";

const LiftIndicator = ({ floor, value, setValue }) => {
  const handleClick = (idx) => {
    if(value === floor){
      setValue(idx)
    }
  }

  return (
    <div className="column">
      {Array(16).fill(0).map((_, idx) => {
        return (
          <div id="indicator-row">
            <div
              className={`square ${idx === 0 ? "ground" : idx === floor ? "active"  : "inactive"} ${idx === value && idx !== floor && "selected-floor"}`}
              onClick={() => handleClick(idx)}
            ></div>
            <p>{idx === 0 ? "Ground Floor" : idx}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LiftIndicator;

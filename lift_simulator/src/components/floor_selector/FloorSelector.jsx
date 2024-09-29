import React, { useState } from "react";
import "./FloorSelector.css";

const FloorSelector = ({ floor, value, setValue }) => {
  const [input, setInput] = useState(0)
  const handleInputChange = (e) => {
    if (e.target.value <= 15 && e.target.value >= 0) {
      setInput(parseInt(e.target.value));
    }
  };
  return (
    <div className="flex-row">
      <input type="number" value={input} onChange={handleInputChange} />
      <button id="start-btn" onClick={() => setValue(input)} disabled={input === floor || value !== floor}>
        Start
      </button>
    </div>
  );
};

export default FloorSelector;

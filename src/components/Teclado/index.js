import React, { useState, useEffect } from "react";

import "./index.css";

function Teclado() {
  const [nums, setNums] = useState("");

  useEffect(() => {
    console.log(nums);
  }, nums);
  return (
    <div className="container">
      <div className="text-area-container">
        <textarea></textarea>
      </div>
      <div className="grupo1-container">
        <button /* onClick={() => setNums(nums.concat('1'))} */>1</button>
        <button onClick={() => setNums(nums.concat("2"))}>2</button>
        <button onClick={() => setNums(nums.concat("3"))}>3</button>
      </div>
      <div className="grupo2-container">
        <button onClick={() => setNums(nums.concat("4"))}>4</button>
        <button onClick={() => setNums(nums.concat("5"))}>5</button>
        <button onClick={() => setNums(nums.concat("6"))}>6</button>
      </div>
      <div className="grupo3-container">
        <button onClick={() => setNums(nums.concat("7"))}>7</button>
        <button onClick={() => setNums(nums.concat("8"))}>8</button>
        <button onClick={() => setNums(nums.concat("9"))}>9</button>
      </div>
    </div>
  );
}

export default Teclado;

import React, { useState, useEffect } from "react";

import "./index.css";

function Teclado() {
  const [nums, setNums] = useState('');

  
  return (    
      <div className='container'>
        <div className='text-area-container'>
          <textarea></textarea>
        </div>
        <div className='grupo1-container'>
          <button /* onClick={() => setNums(nums.concat('1'))} */>1</button>
          <button onClick={() => setNums(`${nums}${2}`)}>
          <sup className="sup-number">2</sup> abc
          </button>
          <button onClick={() => setNums(nums.concat("3"))}>
          def <sup className="sup-number">3</sup>
          </button>
        </div>
        <div className='grupo2-container'>
          <button onClick={() => setNums(nums.concat("4"))}>
            <sup className="sup-number">4</sup> ghi
          </button>
          <button onClick={() => setNums(nums.concat("5"))}>
            <sup className="sup-number">5</sup> jkl
          </button>
          <button onClick={() => setNums(nums.concat("6"))}>
            mno <sup className="sup-number">6</sup>
          </button>
        </div>
        <div className='grupo3-container'>
          <button onClick={() => setNums(nums.concat("7"))}>
            <sup className="sup-numeros">7</sup> pqrs
          </button>
          <button onClick={() => setNums(nums.concat("8"))}>
              <sup className="sup-numeros">8</sup> tuv
          </button>
          <button onClick={() => setNums(nums.concat("9"))}>
            wxyz <sup className="sup-numeros">9</sup>
          </button>
        </div>
      </div>    
  );
}

export default Teclado;

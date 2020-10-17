import React, { useState, useEffect } from "react";
import api from '../../services/api';

import "./index.css";

function Teclado() {
  const [nums, setNums] = useState('');
  const [string, setString] = useState('dsdfdsds');

  useEffect (() => {
    console.log(nums);
  }, [nums])

  async function SendCode(){
    const response = await api.post(`/api/teclado/${nums}`);
    setString(`${string}${response.data.message}`);
    setNums('');
  }

  function Delete(){
    let newString = string.slice(0, string.length - 1)
    setString(newString);    
    console.log(newString);
  }

  return (    
      <div className='container'>
        <div className='text-area-container'>
          <textarea>{string}</textarea>
        </div>

        <div className='button-container'>
          <button className='sup-number' onClick={() => SendCode()}>✆</button>
        </div>

        <div className='grupo1-container'>
          <button className="sup-number"><sup>1</sup></button>
          <button onClick={() => setNums(`${nums}${2}`)}>
          <sup className="sup-number">2</sup> abc
          </button>
          <button onClick={() => setNums(`${nums}${3}`)}>
          def <sup className="sup-number">3</sup>
          </button>
        </div>
        <div className='grupo2-container'>
          <button onClick={() => setNums(`${nums}${4}`)}>
            <sup className="sup-number">4</sup> ghi
          </button>
          <button onClick={() => setNums(`${nums}${5}`)}>
            <sup className="sup-number">5</sup> jkl
          </button>
          <button onClick={() => setNums(`${nums}${6}`)}>
            mno <sup className="sup-number">6</sup>
          </button>
        </div>
        <div className='grupo3-container'>
          <button onClick={() => setNums(`${nums}${7}`)}>
            <sup className="sup-number">7</sup> pqrs
          </button>
          <button onClick={() => setNums(`${nums}${8}`)}>
              <sup className="sup-number">8</sup> tuv
          </button>
          <button onClick={() => setNums(`${nums}${9}`)}>
            wxyz <sup className="sup-number">9</sup>
          </button>
        </div>

        <div className='grupo4-container'>     
          
          <button onClick={() => setString(`${string} `)}>  
            Espaço            
          </button>
          <button onClick={() => Delete()}>  
            Apagar            
          </button>
          
        </div>
      </div>    
  );
}

export default Teclado;

import React from 'react';

import './index.css';

function Teclado() {
  return (    
      <div className='container'>
        <div className='text-area-container'>
          <textarea></textarea>
        </div>
        <div className='grupo1-container'>
          <button><sup className="sup-numeros">1</sup></button>
          <button><sup className="sup-numeros">2</sup> abc</button>
          <button>def <sup className="sup-numeros">3</sup></button>
        </div>
        <div className='grupo2-container'>
        <button><sup className="sup-numeros">4</sup> ghi</button>
          <button><sup className="sup-numeros">5</sup> jkl</button>
          <button>mno <sup className="sup-numeros">6</sup></button>
        </div>
        <div className='grupo3-container'>
        <button><sup className="sup-numeros">7</sup> pqrs</button>
          <button><sup className="sup-numeros">8</sup> tuv</button>
          <button>wxyz <sup className="sup-numeros">9</sup></button>
        </div>
      </div>    
  );
}

export default Teclado;

import React from 'react';

import './index.css';

function Teclado() {
  return (    
      <div className='container'>
        <div className='text-area-container'>
          <textarea></textarea>
        </div>
        <div className='grupo1-container'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className='grupo2-container'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <div className='grupo3-container'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
      </div>    
  );
}

export default Teclado;

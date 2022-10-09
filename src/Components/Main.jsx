import React from 'react'
import { useState } from 'react'
function Main() {
    const [counter, setCounter] = useState(0); 
    const [savedCounts, setSavedCounts] = useState([]);
    const increase = () => {
        setCounter(count => count + 1)
    }; 
    const decrease = () => {
       if(counter > 0 ) {
        setCounter(count => count -1)
       }
    }; 

    const reset = () => { 
        setCounter(0)
    };
    const saveCount = () => {
        setSavedCounts([...savedCounts, counter]);
        reset();
      };


  return (
    <div>
        <h1 className='title'>Simple Counter</h1>
    <div className="counter">
      <span className="counter__output"><h1>{counter}</h1></span>
      <div className="btn__container">
      <button className='control__btn1' onClick={decrease}>-</button>  
      <button className='control__btn'onClick={increase}>+</button>
      </div>
      <div className="btn__container">
      <div className='reset' onClick={(reset)}>Reset</div>
      <button className='save' onClick={saveCount}>Save</button>
      </div>
    </div>
    
    <ol className='save_container'>
        {savedCounts.map((savedCount, index) => (
          <ol className='savednum' key={index}>Saved Count:  {savedCount}</ol>
        ))}
      </ol>
    </div>
  )
}

export default Main
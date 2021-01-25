import React, { useState } from 'react';

const Hook1 = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1)
    const decrementItem = () => setItem(item - 1)
  
    return (
      <div className="box">
        <h2>useState 증가, 감소</h2>
        <div>{item}</div>
        <button onClick={incrementItem}>+</button>
        <button onClick={decrementItem}>-</button>
        <hr></hr>
      </div>
    )
  }

export default Hook1;
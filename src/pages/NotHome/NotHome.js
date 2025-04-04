import React, { useState, useEffect } from 'react';
import './NotHome.css';

const NotHome = () => {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
    setShowMessage(count > 5);
  }, [count]);

  return (
    <div className="nothome-container">
      <h1>Not Home Page</h1>
      <div className="counter-container">
        <h2>Counter: {count}</h2>
        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
        {showMessage && (
          <p className="message">You passed 5!</p>
        )}
      </div>
    </div>
  );
};

export default NotHome; 
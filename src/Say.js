import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('hello!');
  const OnClickLeave = () => setMessage('Bye');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={OnClickLeave}>Exit</button>
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        Red
      </button>

      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        Green
      </button>

      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        Blue
      </button>
    </div>
  );
};

export default Say;

import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [color, setColor] = useState('#ffffff');

  const changeColor = () => {
    const colorCode = 'abcdef1234567890';
    let hexPattern = '#';

    for (let counter = 0; counter < 6; counter++) {
      hexPattern += colorCode[Math.floor(Math.random() * colorCode.length)];
    }

    setColor(hexPattern);
  };

  document.getElementById('root').style.backgroundColor = color;

  return (
    <section>
      <article className="color-box">
        Background Color: <span style={{ color }}>{color}</span>
      </article>
      <button type="button" onClick={changeColor}>
        Change Color
      </button>
    </section>
  );
};

export default App;

import React, { useState } from 'react';
import './style.css';

export default function App() {
  // console.log(new Date().toJSON().slice(0,10));
  const [z, setz] = useState();
  let a = [
    { name: 'HTML', lable: 'html, h1, h2, h4' },
    { name: 'CSS', lable: 'CSSe, h1, h2, h4' },
    { name: 'Javascript', lable: 'javacsript, h1, h2, h4' },
  ];
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {a.map((x) => (
        <h1 onClick={() => setz(x.name)}>{x.name}</h1>
      ))}
      {a.map((x) => (
        <h1 className={x.name === z ? 'active' : ''}>{x.lable}</h1>
      ))}
    </div>
  );
}

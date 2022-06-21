import React from 'react';
import './style.css';

export default function App() {
  // console.log(new Date().toJSON().slice(0,10));
  let d = new Date();
  d = d.toJSON();
  d = d.slice(0, 10);
  d = d.split('-');
  let a = [+d[0], +d[1], +d[2]];
  console.log(a);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
    </div>
  );
}

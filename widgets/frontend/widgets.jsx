import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock'
import Tabs from './tabs'

const tabInfo = [
  {
    title: "one", 
    content: "I am the first"
  },
  {
    title: "two", 
    content: "I am the second"
  },
  {
    title: "three", 
    content: "I am the third"
  }
];

const Root = () => (
  <div>
    <Clock />
    <Tabs array={tabInfo} />
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});

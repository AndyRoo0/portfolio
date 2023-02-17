import React from 'react';
import './App.css';
import portrait from '../images/portrait.png';

function App() {
  return (
    <div>
      <nav className='nav'>
        <p>Nav</p>
      </nav>
      <div className='welcome'>
        <h1>Andrew Rohling</h1>
        <p>Full-Stack Web Developer.</p>
      </div>
      <section className='waves'></section>
      <div className='whoami'>
        <p>Hey there, welcome to my little corner of the web!</p>
        <h1>Who am I?</h1>
        <p>I am me</p>
        <img src={portrait} alt='Me' height='100vh' />
      </div>
      <div className='projects'>
        <h1>What have I been working on?</h1>
        <p>Cool stuff here</p>
      </div>
    </div>
  );
}

export default App;

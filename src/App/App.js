import React from 'react';
import './App.css';
import NavBar from '../Components/NavBar/NavBar';
import portrait from '../images/portrait.png';
import arrow from '../images/arrow.svg';

function App() {
  return (
    <div>
      <NavBar />
      <div className='welcome'>
        <h1>Andrew Rohling</h1>
        <p>Full-Stack Web Developer.</p>
      </div>
      <section className='waves'>
        <a href='#about'>
          <img className='arrow' src={arrow} alt='An arrow' height='50vh' />
        </a>
      </section>
      <div className='whoami' id='about'>
        <p>Hey there, welcome to my little corner of the web!</p>
        <h1>Who am I?</h1>
        <p>I am me</p>
        <img className='portrait' src={portrait} alt='Me' height='100vh' />
      </div>
      <div className='projects' id='projects'>
        <h1>What have I been working on?</h1>
        <p>Cool stuff here</p>
      </div>
      <div className='contactpage' id='contactpage'>
        <h1>Want to get in touch?</h1>
        <p>Send me a message</p>
      </div>
    </div>
  );
}

export default App;

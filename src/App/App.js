import React from 'react';
import './App.css';
import NavBar from '../Components/NavBar/NavBar';
import About from '../Components/About/About';
import arrow from '../images/arrow.svg';
import { HiChevronDoubleDown } from 'react-icons/hi';

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
          <HiChevronDoubleDown className='arrow' />
          {/* <img className='arrow' src={arrow} alt='An arrow' height='50vh' /> */}
        </a>
      </section>
      <About />
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

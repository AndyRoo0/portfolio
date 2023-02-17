import React from 'react';
import './App.css';
import portrait from '../images/portrait.png';
import arrow from '../images/arrow.svg';
import { HiCloudDownload } from 'react-icons/hi';

function App() {
  return (
    <div>
      <ul className='nav'>
        <li>
          <a className='cv' href='default.asp'>
            <i id='downArrow'>
              <HiCloudDownload />
            </i>
            <b>Résumé</b>
          </a>
        </li>
        <li>
          <a href='about.asp'>Contact Me</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
      </ul>

      <div className='welcome'>
        <h1>Andrew Rohling</h1>
        <p>Full-Stack Web Developer.</p>
      </div>
      <section className='waves'>
        <img className='arrow' src={arrow} alt='An arrow' height='50vh' />
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
    </div>
  );
}

export default App;

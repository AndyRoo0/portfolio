import React from 'react';
import './App.css';
import portrait from '../images/portrait.png';
import arrow from '../images/arrow.svg';
import { HiOutlineCloudDownload } from 'react-icons/hi';
import { HiCode } from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi';
import { HiOutlineMail } from 'react-icons/hi';

function App() {
  return (
    <div>
      <ul className='nav'>
        <li>
          <a className='cv' href='default.asp'>
            <i>
              <HiOutlineCloudDownload />
            </i>
            <b>Résumé</b>
          </a>
        </li>
        <li>
          <a className='contact' href='about.asp'>
            <i>
              <HiOutlineMail />
            </i>
            <b>Contact Me</b>
          </a>
        </li>
        <li>
          <a href='#projects' className='proj'>
            <i>
              <HiCode />
            </i>
            <b>Projects</b>
          </a>
        </li>
        <li>
          <a href='#about' className='about'>
            <i>
              <HiOutlineUser />
            </i>
            <b>About</b>
          </a>
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

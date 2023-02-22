import React from 'react';
import './About.css';
import portrait from '../../images/portrait.png';

function About() {
  return (
    <div className='whoami'>
      <p>Hi there, welcome to my little corner of the web!</p>
      <h1>Who am I?</h1>
      <p>My name</p>
      <img className='portrait' src={portrait} alt='Me' height='100vh' />
    </div>
  );
}

export default About;

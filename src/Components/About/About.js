import React from 'react';
import './About.css';
import portrait from '../../images/portrait.png';

function About() {
  return (
    <div className='whoami'>
      <h1>Who am I?</h1>
      <div className='paragraph'>
        <p>
          I'm Andrew, I'm a 25 year old guy living in the UK, and I'm starting
          my career in web development.
        </p>
        <p>
          I have recently completed the{' '}
          <a href='https://www.schoolofcode.co.uk/'>School of Code Bootcamp</a>,
          and had a blast. I've developed a love for desiging and building sites
          and programs, watching what I am working on develop and my ideas come
          to fruition.
        </p>
        <p>
          Since graduating from the bootcamp I have been honing and building
          upon the core skills I picked up during the bootcamp,
        </p>
      </div>
      <img className='portrait' src={portrait} alt='Me' height='100vh' />
    </div>
  );
}

export default About;

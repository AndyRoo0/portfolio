import React from 'react';
import './About.css';
import portrait from '../../images/portrait.png';

function About() {
  return (
    <div className='whoami'>
      <div className='line'>
        <h1>Who am I?</h1>
      </div>
      <div className='inline'>
        <div className='paragraph'>
          <p>
            I'm Andrew, I'm a 25 year old guy living in the UK, and I'm starting
            my career in web development.
          </p>
          <p>
            I have recently completed the{' '}
            <a href='https://www.schoolofcode.co.uk/'>
              School of Code Bootcamp
            </a>
            , and had a blast. I've developed a love for desiging and building
            sites and programs, watching what I am working on develop and my
            ideas come to fruition.
          </p>
          <p>
            Since graduating from the bootcamp I have been honing and building
            upon the core skills I picked up during the bootcamp, playing with
            my own projects and enjoying a little bit of a break!
          </p>
          <p>
            Coding aside, my interests include cars, motorsport, rock climbing
          </p>
        </div>
        <img className='portrait' src={portrait} alt='Me' />
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import './About.css';
import portrait from '../../resources/portrait.png';

function About() {
  return (
    <div className='whoami'>
      <div className='line'>
        <h1>Who am I?</h1>
      </div>
      <div className='inline'>
        <div className='paragraph'>
          <p>
            I'm Andrew, I'm a 25 year old living in the UK, and I'm starting my
            career in web development.
          </p>
          <p>
            I have recently completed the{' '}
            <a href='https://www.schoolofcode.co.uk/'>
              School of Code Bootcamp
            </a>
            , and had a blast. It's been great fun desiging and building sites
            and programs, picking up and learning a huge range of new tools,
            watching what I am working on develop and my ideas come to fruition.
          </p>
          <p>
            Since graduating from the bootcamp I have been building upon the
            core skills I picked up, playing with my own projects and enjoying a
            little bit of a break!
          </p>
          <p>
            Coding aside, my interests include cars, motorsport, rock climbing
            and keeping home aquariums!
          </p>
        </div>
        <img className='portrait' src={portrait} alt='Me' />
      </div>
    </div>
  );
}

export default About;

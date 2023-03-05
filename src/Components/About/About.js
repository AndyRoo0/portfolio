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
            , and had a blast. I am very proud to have been chosen from a pool
            of over 4000 applicants for the program. It's been great fun
            learning how to design and build different sites and programs,
            picking up a huge range of new tools and watching what I am working
            on develop, making my ideas come to fruition.
          </p>
          <p>
            I would describe myself as Full-Stack. I love exploring my
            creativity and designing nice UI/UX & front ends, however I equally
            enjoy the problem solving and logical stages of the back end.
            Wherever I am, I aim to build clean, readable & modern code.
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
        <div className='portrait'>
          <img className='portrait' src={portrait} alt='Me' />
          <p className='caption'>
            Me enjoying a nice cup of tea in the Lake District
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

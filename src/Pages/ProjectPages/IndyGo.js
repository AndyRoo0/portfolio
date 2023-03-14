import React from 'react';
import './indygo.css';
import { TbBarrierBlock } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import ideas from './IndyGo dev images/indypage1.png';
import dreamer from './IndyGo dev images/indypage2.png';
import realist from './IndyGo dev images/indypage3.png';
import critic from './IndyGo dev images/indypage4.png';

function IndyGo() {
  return (
    <div className='indy-content'>
      <h1 className='page-title'>IndyGo - How we made it</h1>
      <a
        href='https://github.com/SchoolOfCode/indygo'
        target='_blank'
        rel='noopener noreferrer'
      >
        View IndyGo on GitHub here
      </a>
      <p style={{ fontStyle: 'italic' }}>
        This page is still under construction! It will be updated to include our
        full process including that in the list below. Check back soon...
      </p>
      <ul>
        <li>Disney Ideation & how we came up with the initial idea</li>
        <li>Market Research</li>
        <li>Miro/Trello organisation</li>
        <li>Tech Stack choices & discussion</li>
        <li>Low & High fidelity wireframes & Figma Design</li>
        <li>Pull Requests & CI/CD workflow</li>
      </ul>
      <section className='indy-contents-list'>
        <h2>Contents</h2>
        <ol>
          <li>
            <a href='#idea'>The Team, and the Idea</a>
          </li>
          <li>
            <a href='#idea'>Defining the MVP</a>
          </li>
          <li>
            <a href='#idea'>
              Proving our Usefulness - Market Research & User Stories
            </a>
          </li>
          <li>
            <a href='#idea'>Choosing our Tech Stack</a>
          </li>
          <li>
            <a href='#idea'>Design - Wireframes & Component Trees</a>
          </li>
          <li>
            <a href='#idea'>Our Workflow - The CI/CD pipeline</a>
          </li>
          <li>
            <a href='#idea'>Launch Day & Project Retrospective</a>
          </li>
        </ol>
      </section>
      <section id='idea'>
        <h2>The Team, and the Idea</h2>
        <p>
          This project was ideated, designed, built and deployed within 4 weeks,
          working as a team of 6. We were given the brief 'Find a real-world
          problem or opportunity, and create a solution'
        </p>
        <p>
          Our first order of business was to get to know each other a bit. We
          used some personality tests just to break the ice, then voted on our
          team name and came up with a plan of how we wanted to work, and what
          we all wanted to get out of the experience.
        </p>
        <p className='no-padding'>
          We then turned our attention on how to structure our time. We had 6
          people to spread the work between, which allowed us to split up into
          smaller teams. We wanted to emulate a real-world working environment,
          and so created a 'team manifesto' of sorts, our rules to work by. This
          included the following:
        </p>
        <ul>
          <li>
            Enforce the importance of personal well-being and burnout prevention
            - Work on a 9-5 basis only, no crunch times
          </li>
          <li>
            Morning stand-up meetings, where we reviewed yesterdays retro notes
            and detailed what we were working on that day
          </li>
          <li>
            Evening retrospectives, we reviewed the work we had completed that
            day, updated the other team members on our progress, devised a
            working plan for the next day.
          </li>
          <li>
            Clearly comment any code in an 'ELI5' (Explain Like I'm 5) method,
            so any team member can easily review any work.
          </li>
          <li>
            Preserve the mentality that everyone here is trying their best,
            encourage asking questions and hear every point through.
          </li>
        </ul>
        <p>
          Once we knew how we were going to work together, we gave ourselves a
          block of time to come up with some ideas, then came back together to
          choose our favourite, using dot voting. That idea was then tested
          using the{' '}
          <a
            href='https://online.visual-paradigm.com/knowledge/disney-creative-strategy/what-is-disney-creative-strategy/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Disney Creative Strategy
          </a>
          , Dreamer, Realist, Critic.
        </p>
        <div className='ideation-images'>
          <img src={ideas} alt='Project Ideation'></img>
          <img src={dreamer} alt='Dreamer'></img>
          <img src={realist} alt='Realist'></img>
          <img src={critic} alt='Critic'></img>
        </div>
      </section>
      <section className='moscow'></section>
      <Link to='/'>
        <button>Back to home</button>
      </Link>
      <TbBarrierBlock />
    </div>
  );
}

export default IndyGo;

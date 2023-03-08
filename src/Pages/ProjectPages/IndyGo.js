import React from 'react';
import './pages.css';
import { TbBarrierBlock } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function IndyGo() {
  return (
    <div className='content'>
      <h1 className='page-title'>IndyGo - How we made it</h1>
      <a
        href='https://github.com/SchoolOfCode/indygo'
        target='_blank'
        rel='noopener noreferrer'
      >
        View IndyGo on GitHub here
      </a>
      <p>
        This project started with the brief: 'Build an app to solve a problem'.
        As a team of 6, with a time frame on just 1 month, we started
        brainstorming ideas.
      </p>
      <p>
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
      <Link to='/'>
        <button>Back to home</button>
      </Link>
      <p>
        <TbBarrierBlock />
      </p>
    </div>
  );
}

export default IndyGo;

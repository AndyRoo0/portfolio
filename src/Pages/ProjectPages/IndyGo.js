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
        This project started with the brief: 'Build an app to solve a problem'
      </p>
      <p>
        As a team of 6, with a time frame on just 1 month, we started
        brainstorming ideas.
      </p>
      <p>This page is still under construction! Check back soon...</p>
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

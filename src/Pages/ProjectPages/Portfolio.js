import React from 'react';
import './pages.css';
import { TbBarrierBlock } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div>
      <div className='content'>
        <a
          href='https://github.com/AndyRoo0/portfolio'
          target='_blank'
          rel='noopener noreferrer'
        >
          View the portfolio on GitHub here.
        </a>
        <p>
          <TbBarrierBlock />
        </p>
        <p>This page is still under construction! Check back soon...</p>
        <Link to='/'>
          <p>Back to home</p>
        </Link>
        <p>
          <TbBarrierBlock />
        </p>
      </div>
    </div>
  );
}

export default Portfolio;

import React from 'react';
import './pages.css';
import { TbBarrierBlock } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function IndyGo() {
  return (
    <div className='content'>
      <a
        href='https://github.com/SchoolOfCode/indygo'
        target='_blank'
        rel='noopener noreferrer'
      >
        View IndyGo on GitHub here.
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
  );
}

export default IndyGo;

import React from 'react';
import { TbBarrierBlock } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import ripple from '../../resources/ripple2.png';

function Ripple() {
  return (
    <div className='page-container'>
      <div className='content'>
        {/* <a
          href='https://github.com/AndyRoo0/portfolio'
          target='_blank'
          rel='noopener noreferrer'
        >
          View the portfolio on GitHub here.
        </a> */}
        <p>
          <TbBarrierBlock />
        </p>
        <p>
          Ripple is (fake) aquarium retailer site. It's a project that combines
          two of my hobbies, fish keeping and design! This is being built as a
          front-end portfolio piece.
        </p>
        <p>This project is still under construction! Check back soon...</p>
        <p>Current Stage: Figma high-fidelity wireframing</p>
        <img src={ripple} alt='Ripple homepage'></img>
        <Link to='/'>
          <p>Back to home</p>
        </Link>
        <p>
          <TbBarrierBlock />
        </p>
        <p>Past Stages</p>
        <p>
          Ideation - I wanted a project to build up my design portfolio, and
          show my knowledge of Figma & Wireframing. What better to do it on than
          fishkeeping?
        </p>
      </div>
    </div>
  );
}

export default Ripple;

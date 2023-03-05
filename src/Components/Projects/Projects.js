import React from 'react';
import './Projects.css';
import indygo from '../../resources/IndyGo image.png';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className='projects'>
      <div className='line'>
        <h1>What have I been working on?</h1>
      </div>
      <div className='project-table'>
        <div className='col1'>
          <h2 className='indy-title'>IndyGo</h2>
          <a
            href='https://indygo.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='indy-link'
          >
            View the deployed project here.
          </a>

          <p className='indy-desc'>
            IndyGo is a mobile-focused application that allows local independent
            businesses to fight back against economic pressures by offering live
            deals to consumers within a walkable distance. Consumers can use
            IndyGo to get active and shop local with a map of independent
            businesses in their area, and can scroll through a carousel of deals
            available to them.
          </p>
          <p>Click on the image to learn more.</p>
        </div>
        <div className='indy-img'>
          <Link to='/indygo'>
            <img src={indygo} alt='IndyGo Home Page'></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;

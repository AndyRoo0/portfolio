import React from 'react';
import './Projects.css';
import indygo from '../../resources/IndyGo image.png';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className='projects'>
      <div className='line'>
        <h1>What have I been working on?</h1>
      </div>
      <ProjectCard
        details={{
          title: 'IndyGo',
          link: 'https://indygo.netlify.app/',
          desc: 'IndyGo is a mobile-focused application that allows local independent businesses to fight back against economic pressures by offering live deals to consumers within a walkable distance. Consumers can use IndyGo to get active and shop local with a map of independent businesses in their area, and can scroll through a carousel of deals available to them.',
          img: indygo,
          alt: 'IndyGo Home Page',
          page: '/indygo',
        }}
      />
    </div>
  );
}

export default Projects;

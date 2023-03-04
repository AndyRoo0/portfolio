import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <div className='line'>
        <h1>What have I been working on?</h1>
      </div>
      <p>Click on an image to see more</p>
      <div className='project-table'>
        <h2 className='indy-title'>IndyGo</h2>
        <p className='indy-desc'>Indy Desc</p>
        <div className='indy-link'>Image link</div>
      </div>
    </div>
  );
}

export default Projects;

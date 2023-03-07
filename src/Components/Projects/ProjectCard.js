import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ details }) {
  return (
    <div>
      <div className='project-table'>
        <div className='col1'>
          <h3 className='proj-title'>{details.title}</h3>
          <p className='proj-desc'>{details.desc}</p>
          <Link to={details.page}>
            <p className='page-link'>See how it was created</p>
          </Link>
        </div>
        <div className='col2'>
          <a href={details.link}>
            <img src={details.img} alt={details.alt}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

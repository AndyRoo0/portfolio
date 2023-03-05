import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ details }) {
  return (
    <div>
      <div className='project-table'>
        <div className='col1'>
          <h2 className='proj-title'>{details.title}</h2>
          <a
            href={details.link}
            target='_blank'
            rel='noopener noreferrer'
            className='proj-link'
          >
            {details.linktext}
          </a>
          <p className='proj-desc'>{details.desc}</p>
          <Link to={details.page}>
            <p className='page-link'>See how it was created</p>
          </Link>
        </div>
        <div className='col2'>
          <Link to={details.page}>
            <img src={details.img} alt={details.alt}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

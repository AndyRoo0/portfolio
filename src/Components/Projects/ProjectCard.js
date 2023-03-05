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
            View the deployed project here.
          </a>

          <p className='proj-desc'>{details.desc}</p>
          <p>Click on the image to learn more.</p>
        </div>
        <div className='proj-img'>
          <Link to={details.page}>
            <img src={details.img} alt={details.alt}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

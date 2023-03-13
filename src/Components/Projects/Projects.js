import React from 'react';
import './Projects.css';
import indygo from '../../resources/IndyGo image.png';
import ripple from '../../resources/ripple logo.png';
import ProjectCard from './ProjectCard';
import { BsGithub } from 'react-icons/bs';

function Projects() {
  return (
    <section className='projects'>
      <div className='line'>
        <h2>What have I been working on?</h2>
      </div>
      <ProjectCard
        details={{
          title: 'IndyGo',
          link: 'https://indygo.netlify.app/',
          desc: 'IndyGo is a mobile-focused application that allows local independent businesses to offer live deals to consumers within a walkable distance. Consumers can use IndyGo to get active and shop local with a map of independent businesses in their area, and a scrollable carousel of deals available to them. This project was designed & built within 4 weeks as a team of 6.',
          img: indygo,
          alt: 'IndyGo Home Page',
          page: '/indygo',
        }}
      />
      <ProjectCard
        details={{
          title: 'Ripple',
          link: 'https://andrewrohling.co.uk/ripple',
          desc: 'A commercial grade website for an aquarium retailer. The aim of this project is to further my understanding of design tools such as Figma, and to add to my knowledge of React, Javascript & CSS. Not yet deployed, click on the image to see my current progress!',
          img: ripple,
          alt: 'Ripple Logo',
          page: '/ripple',
        }}
      />
      <section>
        <h2 className='little-header'>and more!</h2>
        <div className='little-projects'>
          <div className='card1'>
            <a
              href='https://www.andrewrohling.co.uk/dinofacts'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2>Dinosaur Digs</h2>
            </a>
          </div>
          <div className='card2'>
            <a
              href='https://github.com/AndyRoo0/portfolio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2>
                This Portfolio! - <BsGithub />
              </h2>
            </a>
          </div>
          <div className='card3'>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <h2>More Coming Soon</h2>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Projects;

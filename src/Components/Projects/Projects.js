import React from 'react';
import './Projects.css';
import indygo from '../../resources/IndyGo image.png';
import andrew from '../../resources/andrew.png';
import ProjectCard from './ProjectCard';

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
          title: 'Portfolio',
          link: 'https://andrewrohling.co.uk/',
          desc: "I built this site using Create-React-App, Javascript, HTML & CSS. The aim of this project is to solidify my understanding of the basic web tools, and to create my space on the web where I can experiment and show off what I'm working on at any time.",
          img: andrew,
          alt: 'Portfolio Home Page',
          page: '/portfolio',
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
              href='https://andrewrohling.co.uk/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2>Portfolio</h2>
            </a>
          </div>
          <div className='card3'>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <h2>More Coming Soon</h2>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Projects;

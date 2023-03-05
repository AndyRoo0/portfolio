import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='foot'>
      <div className='footcontainer'>
        <p>Site built by Andrew - Thanks for stopping by!</p>
        <a
          href='https://github.com/AndyRoo0/portfolio'
          target='_blank'
          rel='noopener noreferrer'
        >
          See this site on GitHub
        </a>
        <a
          href='https://www.websitecarbon.com/website/andrewrohling-co-uk/'
          target='_blank'
          rel='noopener noreferrer'
        >
          This website aims to be sustainable
        </a>
        <p>
          SVG waves credit to{' '}
          <a
            href='https://www.raykuo.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Ray's
          </a>{' '}
          work on{' '}
          <a
            href='https://codepen.io/raykuo/pen/QgaKrr'
            target='_blank'
            rel='noopener noreferrer'
          >
            Codepen
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

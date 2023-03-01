import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='foot'>
      <div className='footcontainer'>
        <p>Site built by Andrew - Thanks for stopping by!</p>
        <a href='https://github.com/AndyRoo0/portfolio'>
          See this project on GitHub!
        </a>
        <a href='https://www.websitecarbon.com/'>This website is sustainable</a>
        <a href='https://codepen.io/raykuo/pen/QgaKrr'>
          SVG waves credit to Ray
        </a>
      </div>
    </div>
  );
}

export default Footer;

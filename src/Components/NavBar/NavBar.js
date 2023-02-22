import React, { useState } from 'react';
import './NavBar.css';
import { HiOutlineCloudDownload } from 'react-icons/hi';
import { HiCode } from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi';
import { HiOutlineMail } from 'react-icons/hi';

/**
 * An animated sticky NavBar. Includes links to "About", "Contact", "Projects" & "Resume"
 */
function NavBar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 800) {
      setColorchange(false);
    } else {
      setColorchange(true);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div>
      <ul className={colorChange ? 'nav colorChange' : 'nav'}>
        <li>
          <a className='cv' href='default.asp'>
            <i>
              <HiOutlineCloudDownload />
            </i>
            <b>Résumé</b>
          </a>
        </li>
        <li>
          <a className='contact' href='#contactpage'>
            <i>
              <HiOutlineMail />
            </i>
            <b>Contact Me</b>
          </a>
        </li>
        <li>
          <a href='#projects' className='proj'>
            <i>
              <HiCode />
            </i>
            <b>Projects</b>
          </a>
        </li>
        <li>
          <a href='#about' className='about'>
            <i>
              <HiOutlineUser />
            </i>
            <b>About</b>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

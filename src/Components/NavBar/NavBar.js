import React, { useState } from 'react';
import './NavBar.css';
import { HiOutlineCloudDownload } from 'react-icons/hi';
import { HiCode } from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi';
import { HiOutlineMail } from 'react-icons/hi';
import { HiDocumentText } from 'react-icons/hi';

/**
 * An animated sticky NavBar. Includes links to "About", "Contact", "Projects" & "Resume"
 */
function NavBar() {
  return (
    <div>
      <ul className='nav'>
        <li>
          <a className='cv' href='default.asp'>
            <i>
              <HiDocumentText />
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

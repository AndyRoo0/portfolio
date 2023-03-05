import React, { useState } from 'react';
import './NavBar.css';
import { HiMenu } from 'react-icons/hi';
import { HiCode } from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi';
import { HiOutlineMail } from 'react-icons/hi';
import { HiDocumentText } from 'react-icons/hi';
import { BsEyeglasses } from 'react-icons/bs';
import '../../resources/cv.pdf';

/**
 * An animated sticky NavBar. Includes links to "About", "Contact", "Projects" & "Resume"
 */
function NavBar() {
  return (
    <div>
      <div className='menu'>
        <HiMenu className='burger' />
      </div>
      <ul className='nav'>
        <li>
          <a
            className='cv'
            href='https://drive.google.com/file/d/1TSpoHES0FE1Ni5XgqtiJ3KAIL7GvroQo/view?usp=share_link'
            target='_blank'
            rel='noopener noreferrer'
          >
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
        <li>
          <a href='#welcome' className='home'>
            <i>
              <BsEyeglasses />
            </i>
            <b>Hi!</b>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

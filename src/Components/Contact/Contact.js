import React from 'react';
import './Contact.css';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <div className='contactpage'>
      <div className='line'>
        <h2>Want to get in touch?</h2>
      </div>
      <div className='contact-text'>
        <p>
          If you're interested in working together or just want to talk shop (or
          talk fish) send me a message!
        </p>
        <p>
          I read and do try to reply to every email I receive, but will
          prioritise work related messages over just chatting. If you feel like
          I have missed or forgotten about your message please do send a follow
          up.{' '}
        </p>
      </div>
      <div className='links'>
        <div className='icon'>
          <a
            href='mailto:andrew@eseeds.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MdEmail />
          </a>
          <a
            href='mailto:andrew@eseeds.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>andrew@eseeds.com</p>
          </a>
        </div>
        <div className='icon'>
          <a
            href='https://github.com/AndyRoo0'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub />
          </a>
          <a
            href='https://github.com/AndyRoo0'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>AndyRoo0</p>
          </a>
        </div>
        <div className='icon'>
          <a
            href='https://www.linkedin.com/in/andrewrohling/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsLinkedin />
          </a>
          <a
            href='https://www.linkedin.com/in/andrewrohling/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>andrewrohling</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

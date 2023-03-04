import React from 'react';
import './Home.css';
import NavBar from '../../Components/NavBar/NavBar';
import About from '../../Components/About/About';
import Projects from '../../Components/Projects/Projects';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import { HiChevronDoubleDown } from 'react-icons/hi';

function App() {
  return (
    <div>
      <NavBar />
      <div className='welcome'>
        <h1>Andrew Rohling</h1>
        <p>Full-Stack Web Developer.</p>
      </div>
      <section className='waves'>
        <a href='#about'>
          <HiChevronDoubleDown className='arrow' />
        </a>
      </section>
      <div id='about'>
        <About />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='contactpage'>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

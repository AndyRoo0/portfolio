import React, { useState } from 'react';
import './DinoFacts.css';
import { Link } from 'react-router-dom';
import Rock1 from './Rocks/Rock1.png';
import Rock2 from './Rocks/Rock2.png';
import Rock3 from './Rocks/Rock3.png';
import Bone from './Rocks/bone.png';
import GitBone from './Rocks/gitBone.png';

/**
 * A React list item component
 * @param {*} props - A Name, a Description, a Url
 * @returns A 'dinosaur' list item with a name, description & url to populate the history list.
 */
function Dinosaur(props) {
  return (
    <li className='listitem'>
      <p className='listp'>{props.name}</p> {/*Displays the dinosaur name*/}
      <p className='listp listdesc'>{props.description}</p>
      {/*Displays the dinosaur description*/}
      <a
        href={props.url}
        target='_blank'
        rel='noopener noreferrer'
        className='listp'
      >
        Link {/*Displays the dinosaurs Wikipedia link. Opens in new tab*/}
      </a>
    </li>
  );
}

function DinoFacts() {
  const [dinoName, setDinoName] = useState(''); //State used to capture the dinosaur name, to be displayed
  const [dinoDesc, setDinoDesc] = useState(''); //Used to capture the description
  const [dinoUrl, setDinoUrl] = useState(''); //Used to save the wikipedia link
  const [clicks, setClicks] = useState(0); // State to keep track of the number of clicks before a new request is made
  const [imageUrl, setImageUrl] = useState(Rock1); //State used to keep track of the rock image changing as it is clicked
  const [dinosaurs, setDinosaurs] = useState([
    { Name: 'Name', Description: 'Description', Url: '' },
  ]); //Array state that forms the history list of previous dinosaurs. This pre-populated data actually acts as the column headers when displayed.

  /**
   * Responsible for changing the rock image on click, adding and resetting the click counter, calling the api & assigning its data to the dinosaurs array.
   */
  async function handleClick() {
    switch (clicks) {
      case 0:
        setImageUrl(Rock2); //Changes rock image to the cracked image
        setClicks(clicks + 1); //Adds one to the click count state
        break;

      case 1:
        setImageUrl(Rock3); //Changes rock image to the image with a bone sticking out
        setClicks(clicks + 1); //Adds one to the click count state
        break;

      case 2:
        setClicks(0); //Resets the click count state
        setImageUrl(Rock1); //Changes rock image back to the unblemished specimen
        const response = await fetch(
          `https://dinosaur-facts-api.shultzlab.com/dinosaurs/random`
        ); //Calls API
        const data = await response.json(); //Parses JSON response to a JS object
        setDinoName(data.Name); // Sets DinoName state to be received data
        setDinoDesc(data.Description); // Sets DinoDesc state to be received data
        setDinoUrl(`https://en.wikipedia.org/wiki/${data.Name}`); // Creates the wikipedia link (not actually supplied from the API, yet to find a link that doesn't work though!) Updates the DinoUrl state.
        const dinodata = {
          Name: data.Name,
          Description: data.Description,
          Url: `https://en.wikipedia.org/wiki/${data.Name}`,
        }; //Creates the object with the key value pairs needed for the list item.
        setDinosaurs((previous) => [...previous, dinodata]); //Adds the new dinosaur data to the array to be mapped later.
        break;

      default:
        break;
    }
  }

  return (
    <div className='dinocontent'>
      <nav className='dinoNav'>
        {/* Navbar containing Back and Github link bones */}
        <Link to='/' className='back'>
          {/* React-Router-Dom link to website homepage */}
          <img className='bone' src={Bone} alt='A bone, links to homepage' />
        </Link>
        <a
          href='https://github.com/AndyRoo0/portfolio/tree/main/src/Pages/ProjectPages/DinosaurFacts'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='bone' src={GitBone} alt='A bone, links to github' />
        </a>
      </nav>
      <section className='dinopage'>
        {/* Main page content */}
        <img
          src={imageUrl}
          className='rock'
          alt='A rock, contains dinosaur fossils'
          onClick={handleClick}
        />
        {/* React conditional on all tags, rendering to display instructions if there has been no API call */}
        {dinoName.length > 0 ? (
          <h2>{dinoName}</h2>
        ) : (
          <h2>Click on the rock to find a dinosaur!</h2>
        )}
        {dinoDesc.length > 0 && <h3>{dinoDesc}</h3>}
        {dinoUrl.length > 0 && (
          <a
            href={dinoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='wikilink'
          >
            Click here to find out more
          </a>
        )}
      </section>
      {/* Previous dinosaur history. Does not display unless API call has been made. */}
      {dinoName.length > 0 && (
        <section className='history'>
          <ul className='list'>
            {/* Iterates through dinosaurs array, forming a 'Dinosaur' react component for each item. Passes down the Name, Description & Url as props*/}
            {dinosaurs.map((dinosaur) => (
              <Dinosaur
                name={dinosaur.Name}
                description={dinosaur.Description}
                url={dinosaur.Url}
              />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
export default DinoFacts;

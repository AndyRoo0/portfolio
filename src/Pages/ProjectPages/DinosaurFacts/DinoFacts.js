import React, { useState } from 'react';
import './DinoFacts.css';
import { Link } from 'react-router-dom';
import Rock1 from './Rocks/Rock1.png';
import Rock2 from './Rocks/Rock2.png';
import Rock3 from './Rocks/Rock3.png';
import Bone from './Rocks/bone.png';
import GitBone from './Rocks/gitBone.png';

function Dinosaur(props) {
  console.log('props', props);
  return (
    <li className='listitem'>
      <p className='listp listname'>{props.name}</p>
      <p className='listp listdesc'>{props.description}</p>
      <a
        href={props.url}
        target='_blank'
        rel='noopener noreferrer'
        className='listp listlink'
      >
        Link
      </a>
    </li>
  );
}

function DinoFacts() {
  const [dinoName, setDinoName] = useState('');
  const [dinoDesc, setDinoDesc] = useState('');
  const [dinoUrl, setDinoUrl] = useState('');
  const [clicks, setClicks] = useState(0);
  const [imageUrl, setImageUrl] = useState(Rock1);
  const [dinosaurs, setDinosaurs] = useState([
    { Name: 'Name', Description: 'Description', Url: '' },
  ]);

  const handleClick = async () => {
    switch (clicks) {
      case 0:
        setImageUrl(Rock2);
        setClicks(clicks + 1);
        break;

      case 1:
        setImageUrl(Rock3);
        setClicks(clicks + 1);
        break;

      case 2:
        setClicks(0);
        setImageUrl(Rock1);
        const response = await fetch(
          `https://dinosaur-facts-api.shultzlab.com/dinosaurs/random`
        );
        const data = await response.json();
        console.log(data);
        setDinoName(data.Name);
        setDinoDesc(data.Description);
        setDinoUrl(`https://en.wikipedia.org/wiki/${data.Name}`);
        const dinodata = {
          Name: data.Name,
          Description: data.Description,
          Url: `https://en.wikipedia.org/wiki/${data.Name}`,
        };
        setDinosaurs((previous) => [...previous, dinodata]);
        break;

      default:
        break;
    }
  };

  return (
    <div className='dinocontent'>
      <nav className='dinoNav'>
        <Link to='/' className='back'>
          <img className='bone' src={Bone} alt='A bone, links to homepage' />
        </Link>
        <a href='https://github.com/AndyRoo0/portfolio/tree/main/src/Pages/ProjectPages/DinosaurFacts'>
          <img className='bone' src={GitBone} alt='A bone, links to homepage' />
        </a>
      </nav>
      <section className='dinopage'>
        <img
          src={imageUrl}
          className='rock'
          alt='A rock, contains dinosaur fossils'
          onClick={handleClick}
        />
        {dinoName.length > 0 ? (
          <h2>{dinoName}</h2>
        ) : (
          <h2>Click on the rock to find a dinosaur!</h2>
        )}
        {dinoUrl.length > 0 && <h3>{dinoDesc}</h3>}
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
      {dinoName.length > 0 && (
        <section className='history'>
          <ul className='list'>
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

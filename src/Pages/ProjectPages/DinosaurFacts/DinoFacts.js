import React, { useState } from 'react';
import './DinoFacts.css';
import { HiOutlineSearch } from 'react-icons/hi';
import Rock1 from './Rocks/Rock1.png';
import Rock2 from './Rocks/Rock1.png';
import Rock3 from './Rocks/Rock1.png';

function DinoFacts() {
  const [dinoName, setDinoName] = useState('');
  const [dinoDesc, setDinoDesc] = useState('');
  const [dinoUrl, setDinoUrl] = useState('');
  const [clicks, setClicks] = useState(0);
  const [imageUrl, setImageUrl] = useState(Rock1);

  const handleClick = async () => {
    switch (clicks) {
      case 0:
        setImageUrl(Rock1);
        setClicks(clicks + 1);
        console.log(clicks);
        break;

      case 1:
        setImageUrl(Rock2);
        setClicks(clicks + 1);
        console.log(clicks);
        break;

      case 2:
        setImageUrl(Rock3);
        setClicks(clicks + 1);
        console.log(clicks);
        break;

      case 3:
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
        break;

      default:
        break;
    }
  };

  const imageswapper = () => {};

  return (
    <div className='dinopage'>
      <img
        src={imageUrl}
        alt='A rock, contains dinosaur fossils'
        onClick={handleClick}
      />
      {dinoName.length > 0 ? (
        <h2>{dinoName}</h2>
      ) : (
        <h2>Click on the button to find a dinosaur!</h2>
      )}
      <h3>{dinoDesc}</h3>
      {dinoUrl.length > 0 && <a href={dinoUrl}>Click here to find out more</a>}
    </div>
  );
}
export default DinoFacts;

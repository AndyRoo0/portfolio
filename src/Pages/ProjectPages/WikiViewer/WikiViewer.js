import React from 'react';
import './wikiviewer.css';
import { HiOutlineSearch } from 'react-icons/hi';

function WikiViewer() {
  const handleSubmit = (e) => {
    const search = document.getElementById('searchbar');
    e.preventDefault();
    // if (search.value === '' || null) {
    //   alert('Search');
    // } else {
    const url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=${search.value}&utf8=&format=json`;
    console.log(search.value);
    results(url);
    search.value = '';
    // }
  };

  const results = async (url) => {
    const response = await fetch(url);
    console.log(response);
  };

  return (
    <div className='wikipage'>
      <form name='searchForm'>
        <input
          id='searchbar'
          type='search'
          placeholder='search wikipedia...'
          autoComplete='off'
          required
        ></input>
        <button type='submit' onClick={handleSubmit}>
          <HiOutlineSearch />
        </button>
        <a
          href='https://en.wikipedia.org/wiki/Special:Random'
          target='_blank'
          rel='noopener noreferrer'
        >
          Read a random article...
        </a>
      </form>
    </div>
  );
}

export default WikiViewer;

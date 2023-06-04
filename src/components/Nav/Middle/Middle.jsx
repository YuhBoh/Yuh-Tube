import { React, useState } from 'react';
import '../Nav.css';
import { useSelector, useDispatch } from 'react-redux';

function Middle() {
  const user = useSelector(store => store.user);

  // FOR MIDDLE SECTION: SEARCHBAR
  const [searchInput, setSearchInput] = useState('');
  // console.log('SEARCHINPUT:', searchInput); WORKS
  const dispatch = useDispatch();

  const getSearch = (event) => {
    event.preventDefault();

    if (!searchInput == '') {
      dispatch({
        type: 'SAGA/GET_SEARCH',
        payload: searchInput
      });
    }
    // GO TO ROOT SAGA
    setSearchInput('');
  }

  return (
    <>
      {/* MIDDLE SECTION */}
      <div className="middle-section">

        <input 
          value={searchInput}
          onChange={event => setSearchInput(event.target.value)}
          className="search-bar" 
          type="text" 
          placeholder="Search"/>

        <button 
          onClick={getSearch}
          className="search-button">
          <img className="search-icon" src={require("../images/search.png")} alt="search" />
          <div className="tooltip">Search</div>
        </button>

        <button className="voice-search-button">
          <img className="voice-search-icon" src={ require("../images/voice-search-icon.png")} alt="" />
          <div className="tooltip">Search with your voice</div>
        </button>

      </div>
    </>
  );
}

export default Middle;
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';
import Upload from './Upload/Upload';

function Nav() {
  const user = useSelector((store) => store.user);
  const [openModal, setOpenModal] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  console.log('SEARCHINPUT:'. searchInput);

  const addAPI = (event) => {
    event.preventDefault();
    const dispatch = useDispatch();

    dispatch({
      type: 'SAGA/ADD_API',
      payload: searchInput
    });
  }

  return (
    // HEADER
    <div className="header">
      <Link to="/home">
        <div className="left-section">
          <img 
            className="hamburger-menu"
            src={ require("./images/hamburger-menu.png")} alt="hamburger menu" />
          <h2 className="nav-title">Yuh-Tube</h2>
        </div>
      </Link>

      {/* MIDDLE SECTION */}
      <div className="middle-section">

        <form onSubmit={addAPI}>
          <input 
            value={searchInput}
            onChange={event => setSearchInput(event.target.value)}
            className="search-bar" 
            type="text" 
            placeholder="Search"/>

          <button className="search-button">
            <img className="search-icon" src={ require("./images/search.png")} alt="search" />
            <div className="tooltip">Search</div>
          </button>
        </form>

        <button className="voice-search-button">
          <img className="voice-search-icon" src={ require("./images/voice-search-icon.png")} alt="" />
          <div className="tooltip">Search with your voice</div>
        </button>

      </div>

      <div className="right-section">
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <div className="upload-icon-container">
              <img onClick ={() => {setOpenModal(true);}}className="upload-icon" src={require("./images/upload.png")} alt="" />
              <div className="tooltip">Create</div>
            </div>
            {openModal && <Upload 
            className="upload-pop"
            closeModal={setOpenModal} />}
            

            <Link className="nav-link" to="/info">
              Info Page
            </Link>

            <LogOutButton className="nav-link"/>
          </>
        )}

        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;

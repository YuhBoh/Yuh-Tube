import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
// import './styles/general.css';
import './styles/header.css';
// import './styles/sidebar.css';
// import './styles/video.css';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <LogOutButton className="btn" />
      </div>

    {/* HEADER */}
    {/* <div className="header">
      <div className="left-section">
        <img className="hamburger-menu" src="icons/hamburger-menu.svg" alt=""/>
        <img className="youtube-logo" src="icons/youtube-logo.svg" alt=""/>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search"/>
        <button className="search-button">
          <img className="search-icon" src="icons/search.svg" alt=""/>
          <div className="tooltip">Search</div>
        </button>
        <button className="voice-search-button">
          <img className="voice-search-icon" src="icons/voice-search-icon.svg" alt=""/>
          <div className="tooltip">Search with your voice</div>
        </button>
      </div>

      <div className="right-section">
        <div className="upload-icon-container">
          <img className="upload-icon" src="icons/upload.svg" alt=""/>
          <div className="tooltip">Create</div>
        </div>

        <div className="youtube-apps-icon-container">
          <img className="youtube-apps-icon" src="icons/youtube-apps.svg" alt=""/>
          <div className="tooltip">Youtube Apps</div>
        </div>

        <div className="notifications-icon-container">
          <img className="notifications-icon" src="icons/notifications.svg" alt=""/>
          <div className="notifications-count">3</div>
          <div className="tooltip">Notifications</div>
        </div>
        <img className="current-user-picture" src="channel-pictures/my-channel.jpeg" alt=""/>
      </div>
    </div> */}
    </>

  );
}

// this allows us to use <App /> in index.js
export default UserPage;

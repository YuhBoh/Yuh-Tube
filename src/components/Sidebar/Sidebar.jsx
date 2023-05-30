import { React } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-link">
          <Link 
            to="/user"
            className="sidebar-text">
            <img src={require("./images/home.png")} alt=""/>
            <div>Home</div>
          </Link>
          
        </div>

        <div className="sidebar-link">
          <img src="sidebar-icons/explore.svg" alt=""/>
          <div>Explore</div>
        </div>

        <div className="sidebar-link">
          <img src="sidebar-icons/subscriptions.svg" alt=""/>
          <div>Subscriptions</div>
        </div>
        
        <div className="sidebar-link">
          <img src="sidebar-icons/originals.svg" alt=""/>
          <div>Originals</div>
        </div>

        <div className="sidebar-link">
          <img src="sidebar-icons/youtube-music.svg" alt=""/>
          <div>Youtube Music</div>
        </div>

        <div className="sidebar-link">
          <img src="sidebar-icons/library.svg" alt=""/>
          <div>Library</div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

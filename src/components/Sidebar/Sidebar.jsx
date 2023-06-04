import { React } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link to="/user"
              className="links">
          <img className="sidebar-img" src={require("./images/home.png")} alt=""/>
          Home
        </Link>

        <Link to="/user"
              className="links">
          <img className="sidebar-img" src={require("./images/home.png")} alt=""/>
            explore
        </Link>

        <Link to="/user"
              className="links">
          <img className="sidebar-img" src={require("./images/home.png")} alt=""/>
            Subscriptions
        </Link>

        {/* LINE HEERE */}
        <hr className="seperator"/>
      
        <Link to="/user"
              className="links">
          <img className="sidebar-img" src={require("./images/home.png")} alt=""/>
            Library
        </Link>


        <Link to="/user"
              className="links">
          <img className="sidebar-img" src={require("./images/home.png")} alt=""/>
            History
        </Link>



        <Link to="/user"
              className="links">
          <img className="sidebar-img"src={require("./images/home.png")} alt=""/>
            Your videos
        </Link>

        <Link to="/user"
              className="links">
          <img className="sidebar-img" src={require("./images/home.png")} alt=""/>
            Watch later
        </Link>
       
      </div>
    </>
  )
}
export default Sidebar;

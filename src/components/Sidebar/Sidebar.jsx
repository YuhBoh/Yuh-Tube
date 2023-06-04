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
            <img className="sidebar-img" src={require("./images/shorts.png")} alt=""/>
            shorts
        </Link>

        <Link to="/user"
              className="links">
          <img className="sidebar-img" src={require("./images/subscriptions.png")} alt=""/>
            Subscriptions
        </Link>

        {/* LINE HEERE */}
        <hr className="seperator"/>
      
        <Link to="/user"
              className="links">
          <img className="sidebar-img" src={require("./images/library.png")} alt=""/>
            Library
        </Link>


        <Link to="/user"
              className="links">
          <img className="sidebar-img" src={require("./images/history.png")} alt=""/>
            History
        </Link>



        <Link to="/user"
              className="links">
          <img className="sidebar-img"src={require("./images/yourvideos.png")} alt=""/>
            Your videos
        </Link>

        <Link to="/user"
              className="links">
          <img className="sidebar-img" src={require("./images/watchlater.png")} alt=""/>
            Watch later
        </Link>
       
      </div>
    </>
  )
}
export default Sidebar;

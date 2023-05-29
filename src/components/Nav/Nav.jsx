import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Upload from './Upload/Upload';

function Nav() {
  const user = useSelector((store) => store.user);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Yuh-Tube</h2>
      </Link>
      <div className="nav-right">
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
            <Link className="navLink" to="/user">
              Home
            </Link>

            <div className="upload-container">
              <Link 
                onClick ={() => {setOpenModal(true);}}    
                className="navLink" 
                to="/user">
                Upload
              </Link>
              {openModal && <Upload 
              className="upload-pop"
              closeModal={setOpenModal} />} 
            </div>
            

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;

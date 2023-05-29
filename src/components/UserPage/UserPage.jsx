import LogOutButton from '../LogOutButton/LogOutButton';
import { React, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import VideosList from './VideosList';
import './UserPage.css';

function UserPage() {
  useEffect(() => {
    dispatch({
      type: 'SAGA/GET_URLS'
    })
  }, [])
  
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h3>
          Videos
        </h3>
      </div>
          
      <div className="video-grid">
          <VideosList user={user}/>
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

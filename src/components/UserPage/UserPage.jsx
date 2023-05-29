import LogOutButton from '../LogOutButton/LogOutButton';
import { React, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
// import './styles/general.css';
import './styles/header.css';
// import './styles/sidebar.css';
// import './styles/video.css';
import VideosList from './VideosList';

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
      <div className="video-grid">
        <ul>
          <h3>
            Videos
          </h3>
        </ul>

        <div>
          <VideosList user={user}/>
        </div>
      </div>
    </>

  );
}

// this allows us to use <App /> in index.js
export default UserPage;

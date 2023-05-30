import LogOutButton from '../LogOutButton/LogOutButton';
import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import VideosList from './VideosList';
import './UserPage.css';
import VideoPlaylistList from '../VideoPlaylist/VideoPlaylistList';

function UserPage() {
  useEffect(() => {
    dispatch({
      type: 'SAGA/GET_URLS'
    })
  }, [])

  useEffect(() => {
    dispatch({
      type: 'SAGA/GET_PLAYLISTS'
    })
  }, [])
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const playlists = useSelector((store) => store.playlists);
  console.log("store.playlist:", playlists)

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

      <div className="playlist-section">
        <h3>
          Playlist
        </h3>

        <div>
          <VideoPlaylistList />
        </div>
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

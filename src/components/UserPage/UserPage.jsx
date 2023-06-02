import LogOutButton from '../LogOutButton/LogOutButton';
import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import VideosList from './VideosList';
import './UserPage.css';
import VideoPlaylistList from '../VideoPlaylist/VideoPlaylistList';
import SearchVideos from '../Nav/Middle/SearchVideos/SearchVideos';

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
  const searches = useSelector(store => store.search);
  console.log('SEARCHES:', searches.data)
  // const searchThumbnail = searches.data.data.dataArray.snippet.thumbnails.high.url

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h3>
          Videos
        </h3>
      </div>

      <div className="videos-section">
    <div className="video-container">
      <div className="video">
            {/* <img src={searchThumbnail} className="api-thumbnail" alt="" /> */}

            <div className="content">
                {/* <img src={ require()} className="channel-icon" alt="" /> */}

              <div className="info">
                <h4 className="title"></h4>
                <p className="channel-name"></p>
              </div>

            </div>

          </div>
       
    </div>
      </div>
        

      <div>
        <h3>
          Saved
        </h3>
      </div>
          
      <VideosList user={user}/>

      <div id="playlist-section">
        <h3>
          Playlist
        </h3>

      <VideoPlaylistList />

      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

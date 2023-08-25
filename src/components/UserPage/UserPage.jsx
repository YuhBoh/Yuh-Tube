import LogOutButton from '../LogOutButton/LogOutButton';
import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import VideosList from './VideosList';
import './UserPage.css';
import VideoPlaylistList from '../VideoPlaylist/VideoPlaylistList';
import SearchVideo from '../Nav/Middle/SearchVideos/SearchVideo';

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

  useEffect(() => {
    dispatch({
      type: ' SAGA/GET_SEARCH'
    })
  }, [])

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const search = useSelector(store => store.search);
  const searches = search?.data?.data?.dataArray || [];
  // const searchThumbnail = searches.data.data.dataArray.snippet.thumbnails.high.url

  const dispatch = useDispatch();

  return (
    <>
      <div className="userpage-container">
        <div>
          <h3>
            Videos
          </h3>
        </div>

        <div className="videos-section">
          {
            searches.map(search => {
              return (
                <SearchVideo key={search.id} search={search}/>
              )
            })
          }
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
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

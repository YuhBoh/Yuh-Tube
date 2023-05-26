import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import "./VideoPlaylist.css";
import VideoPlaylistList from './VideoPlaylistList';

export default function VideoPlaylist({video}) {
  const dispatch = useDispatch();
  
  // for pop-up; currently false
  const [modal, setModal] = useState(false);

  // function to toggle state of modal
  const toggleModal = () => {
    setModal(!modal)
  }

  // function to add links to a playlist(s)
  const addToPlaylist = (event) => {
  event.preventDefault();
    // calls dispatch to SAGA
    dispatch({
      type: 'SAGA/ADD_PLAYLIST',
      payload: id
    });

    // maybe another SAGA dispatch to get playlist? 
  }

  return (
    <>
      <button
      onClick={toggleModal}>
        Save
      </button>

      {modal && (
        <div className="modalBackground3">
          <div className="modalContainer3">
            <div className="titleCloseBtn3">
              {/* Will close 2nd modal */}
              <button onClick={() => closeModal(false)}> X </button>
            </div>

            {/* title */}
            <div>
              <p>Save to...</p>
            </div>

            {/* List of playlists go here! */}
            <div className="playlist">
              <VideoPlaylistList />
            </div>
  
            {/* Click here to create new playlist */}
            <div>
              Create Playlist
              <input className="playlist-input" type="text" placeholder="Enter playlist name..."
              pattern="[^<>]*" maxLength="150"/>
            </div>
   
          </div>
        </div>
        )
      }
    </>
  )

}

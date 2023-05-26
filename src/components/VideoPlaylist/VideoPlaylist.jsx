import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./VideoPlaylist.css";
import VideoPlaylistList from './VideoPlaylistList';

export default function VideoPlaylist({video}, {user}) {
  // to reload component to show cuurent playlist???
  useEffect(() => {
    dispatch({
      type: 'SAGA/GET_PLAYLISTS'
    })
  }, [])

  const dispatch = useDispatch();
  
  // for pop-up; currently false
  const [modal, setModal] = useState(false);

  // create state for playlist
  const [playlistInput, setPlaylistInput] = useState([]);

  // function to toggle state of modal
  const toggleModal = () => {
    setModal(!modal)
  }

  // function to add playlist(s). id comes from addPlaylist(user.id) below
  const addPlaylist = (event) => {
    event.preventDefault();

    // calls dispatch to SAGA and sends playlistInput
    dispatch({
      type: 'SAGA/ADD_PLAYLIST',
      payload: playlistInput
    });
    // console.log("playlistInput:", playlistInput); POST WORKS
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
  
            {/* Click here to create(POST/GET) new playlist */}
            <div>
              Create Playlist
              <input className="playlist-input"
                     type="text" 
                     placeholder="Enter playlist name..."
                     value={playlistInput}
                     onChange={event => setPlaylistInput(event.target.value)}>
              </input>
            </div>

            <div>
              <button onClick={addPlaylist}
              >SUBMIT
              </button>
            </div>
   
          </div>
        </div>
        )
      }
    </>
  )
}

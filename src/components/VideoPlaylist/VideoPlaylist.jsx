import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import "./VideoPlaylist.css";
import VideoPlaylistList from './VideoPlaylistList';

export default function VideoPlaylist() {
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
      type: 'SAGA/ADD_PLAYLISTS',
      payload: playlistInput
    });
    // console.log("playlistInput:", playlistInput); WORKS

    //after adding playlist name to playlist, display results on DOM
    // dispatch({
    //   type: 'SAGA/GET_PLAYLISTS'
    // })
    // GO TO PLAYLISTS.SAGA.JS
  }

  return (
    <>
      <button className='save-btn'
      onClick={toggleModal}>
        Save
      </button>

      {modal && (
        <div className="overlay">
          <div className='modal-content'>
            <div className='top-container'>
              {/* title */}
              <div>
                Save to...
              </div>

              {/* Will close 2nd modal */}
              <button 
                className="close-btn"
                onClick={toggleModal}
                > X 
              </button>
            </div>

              

              {/* List of playlists go here! */}
              <div className="playlist">
                <VideoPlaylistList />
              </div>

              {/* Click here to create(POST/GET) new playlist */}
              <div className='bottom-container'>

                <div className='create-title'>
                  Create Playlist
                </div>
                
                <div className='create-playlist'>
                  <input className="playlist-input"
                        type="text" 
                        placeholder="Enter playlist name..."
                        value={playlistInput}
                        onChange={event => setPlaylistInput(event.target.value)}>
                  </input>
                </div>

                <div>
                  <button
                  className='submit-btn' 
                  onClick={addPlaylist}
                  >SUBMIT
                  </button>
                </div>
              </div>

              

            </div>

          </div>
        )
      }
    </>
  )
}

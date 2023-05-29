import {React, useState } from 'react';
import { useDispatch }from 'react-redux';
import "./styles/PlaylistItem.css";

export default function PlaylistItem({ playlist }) {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);

  const [playlistName, setPlaylistName] = useState(playlist.playlist_name);

  const handleInputChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const updatePlaylistName = () => {
    setEditing(false);

    dispatch({
      type: 'SAGA/UPDATE_PLAYLIST',
      payload: {name: playlistName, id: playlist.id}
    })
    // console.log("playlistName:", playlistName ); WORKS

    dispatch({
      type: 'SAGA/GET_PLAYLISTS'
    })
    // NOW GO TO PLAYLISTS.SAGA.JS
  };

  return (
    <div className="item-container">
      <div>
        {editing ? (
          <input
            className="saveto-input"
            type="text"
            value={playlistName}
            onChange={handleInputChange}
          />
        ) : (
          <div>
            {playlistName}
          </div>
        )}
      </div>

      <div className="options-container">
        {editing ? (
          <button className="saveto-edit-btn" onClick={updatePlaylistName}>
            Save
          </button>
        ) : (
          <button className="saveto-edit-btn" onClick={() => setEditing(true)}>
            Edit
          </button>
        )}
        <button className="saveto-delete-btn">/</button>
      </div>
      
    </div>
  );
}
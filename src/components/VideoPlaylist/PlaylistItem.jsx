import {React, useState } from 'react';
import { useDispatch }from 'react-redux';
import "./styles/PlaylistItem.css";

export default function PlaylistItem({playlist}) {
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

  function deletePlaylists(id) {
    // console.log("playlist:", id); WORKS
    dispatch({
      type: "SAGA/DELETE_PLAYLISTS",
      payload: id
    });

    dispatch({
      type: "SAGA/GET_PLAYLISTS"
    });
  }

  return (
    <div className="item-container">
  
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

      <div className="saveto-options-container">
        {editing ? (
          <button className="saveto-edit-btn" onClick={updatePlaylistName}>
            Save
          </button>
        ) : (
          <div>
            <button className="saveto-edit-btn" onClick={() => setEditing(true)}>
            <img src={ require("./images/edit-pen.png")} alt="" />
            </button>
            <button className="saveto-delete-btn"
                onClick={() => deletePlaylists(playlist.id)}>
            <img src={ require("./images/trash.png")} alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
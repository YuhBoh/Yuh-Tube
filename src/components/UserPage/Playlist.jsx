import React from 'react';
import "./Playlist.css";
import { useDispatch } from 'react-redux';

export default function Playlist({closeModal}) {
  const dispatch = useDispatch();

  const addToPlaylist = (event) => {
    event.preventDefault();

    dispatch({
      type: 'SAGA/ADD_PLAYLIST'
    });
  }

  function deleteVideos(id) {
  // console.log("video.id:", video.id); DELETE VIDEO WORKS
    dispatch({
      type: 'SAGA/DELETE_VIDEOS',
      payload: id
  });

    dispatch({
      type: 'SAGA/GET_URLS'
    });
}

  return (
    <>
      <div className='modalBackground'>
        <div className='modalContainer'>
          <div className='closeBtn'>
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className='body'>
            <button onClick={addToPlaylist}>SUBMIT</button>
          </div>
          <button onClick={() => deleteVideos(video.id)}>
            DELETE
          </button>
        </div>
      </div>
    </>
  )
}
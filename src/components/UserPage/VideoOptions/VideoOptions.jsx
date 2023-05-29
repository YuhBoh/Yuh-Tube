import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./styles/VideoOptions.css";
import VideoPlaylist from '../../VideoPlaylist/VideoPlaylist';


export default function VideoOptions({video}, {user}) {
  const dispatch = useDispatch();
  // for pop-up; currently false
  const [modal, setModal] = useState(false);

  // function to toggle state of modal
  const toggleModal = () => {
    setModal(!modal)
  }

  //function to delete videos from db and render results
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
      <button 
      onClick={toggleModal}
      className='options-btn'>
        ...
      </button>

      {/* Will only show if modal = true */}
      {modal && (
        <div className="modal-background">
          <div className="modal-container">

            <div className="close-container">
              {/* When clicked, will close modal */}
              <button className="close-btn"
                      onClick={toggleModal}
                >X 
              </button>
            </div>

            <div className="title2">
              <p>Options</p>
            </div>
        
            {/* When clicked will open 2nd modal and close first modal. */}
            <div>
              <VideoPlaylist video={video} 
                             user={user}/>
            </div>

        
            {/* Button to run deleteVideos function */}
            <div>
              <button 
              className='delete-btn'
              onClick={() => deleteVideos(video.id)}>
                Delete
              </button>
            </div>

          </div>
        </div>
        )
      }
    </>
  )
}


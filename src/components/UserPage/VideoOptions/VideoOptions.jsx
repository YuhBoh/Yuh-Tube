import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./styles/VideoOptions.css";
import VideoPlaylist from '../../VideoPlaylist/VideoPlaylist';

export default function VideoOptions({video}, {user}) {
  // for pop-up; currently false
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  // function to toggle state of modal
  const toggleModal = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
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
        <img 
          className="dots"
          src={require("../images/horizontal-dots.png")} alt="" />
      </button>

      {/* Will only show if modal = true */}
      {modal && (
        <div className="modal">  
          <div className="options-container">
            <div className="top-container">

              <div>
                <p className="title2">Options</p>
              </div>

              {/* When clicked, will close modal */}
              <button className="close-btn"
                      onClick={toggleModal}
                >X 
              </button>
            </div>

            
        
            {/* When clicked will open 2nd modal and close first modal. */}
            <div>
              <VideoPlaylist video={video} 
                            user={user}
                            />
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


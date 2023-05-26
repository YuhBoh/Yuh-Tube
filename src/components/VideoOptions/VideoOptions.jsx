import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./VideoOptions.css";
import VideoPlaylist from '../VideoPlaylist/VideoPlaylist';


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
      onClick={toggleModal}>
        ...
      </button>

      {/* Will only show if modal = true */}
      {modal && (
        <div className="modalBackground2">
          <div className="modalContainer2">

            <div className="titleCloseBtn2">
              {/* When clicked, will close modal */}
              <button 
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
              <button onClick={() => deleteVideos(video.id)}>
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


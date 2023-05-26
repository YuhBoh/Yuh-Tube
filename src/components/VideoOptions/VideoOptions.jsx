import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./VideoOptions.css";
import VideoPlaylist from '../VideoPlaylist/VideoPlaylist';


export default function VideoOptions({closeModal, video}) {
  const dispatch = useDispatch();
  // for second pop-up; currently false
  const [modal, setModal] = useState(false);


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

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <button onClick={() => {toggleModal}}>
        ...
      </button>

      {/* Will only show if modal = true */}
      {modal && (
        <div className="modalBackground2">
          <div className="modalContainer2">
            <div className="titleCloseBtn2">
              {/* When clicked, will close modal */}
              <button onClick={toggleModal}> X </button>
            </div>
            <div className="title2">
              <p>Options</p>
            </div>
            <div>
              <div>
                  {/* When clicked will open 2nd modal and close first modal. */}
                <Link onClick ={() => {setModal(true);}}    
                      to="/info">
                  Save
                </Link>
              </div>
              <div>
                <button onClick={() => deleteVideos(video.id)}>
                  Delete
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


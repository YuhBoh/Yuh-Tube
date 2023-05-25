import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import "./VideoOptions.css";

export default function VideoOptions({closeModal, video}) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

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
      <div className="modalBackground2">
        <div className="modalContainer2">
          <div className="titleCloseBtn2">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="title2">
            <p>Options</p>
          </div>
          <div>
            <div>
                <button onClick ={() => {setOpenModal(true);}}>
                  Save
                </button>
                {openModal && <VideoPlaylist closeModal={setOpenModal} />}
              
            </div>
            <div>
              <button onClick={() => deleteVideos(video.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
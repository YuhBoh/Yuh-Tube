import { useDispatch } from 'react-redux';
import "./Playlist.css";

export default function Playlist({closeModal, video}) {
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
      <div className="modalBackground2">
        <div className="modalContainer2">
          <div className="titleCloseBtn2">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="title2">
            <p>Playlist</p>
          </div>
          <div>
            <div>
             <button onClick={addToPlaylist}>
                Playlist
              </button> 
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
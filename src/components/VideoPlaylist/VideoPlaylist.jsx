import { useDispatch } from 'react-redux';
import "./VideoPlaylist.css";

export default function VideoPlaylist({closeModal, video}) {
  const dispatch = useDispatch();
  
  const addToPlaylist = (event) => {
  event.preventDefault();

    dispatch({
      type: 'SAGA/ADD_PLAYLIST'
    });
  }

  return (
    <>
      <div className="modalBackground3">
        <div className="modalContainer3">
          <div className="titleCloseBtn3">
            {/* Will close 2nd modal */}
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="title3">
            <p>Save to...</p>
          </div>
          <div>
            <div>
              <button>
                playlist
              </button>
            </div>
            <div>
              <button>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

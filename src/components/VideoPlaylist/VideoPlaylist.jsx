import { useDispatch } from 'react-redux';

export default function VideoPlaylist({closeModal, video}) {
  const addToPlaylist = (event) => {
  event.preventDefault();

    dispatch({
      type: 'SAGA/ADD_PLAYLIST'
    });
  }

}

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function VideoItem({video}) {

  // const history = useHistory(); ??
  const dispatch = useDispatch();


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
    <li>
      <a href={video.video_url}>
        {video.video_url}
      </a>
      <button onClick={() => deleteVideos(video.id)}>DELETE</button>
    </li>
  )
}
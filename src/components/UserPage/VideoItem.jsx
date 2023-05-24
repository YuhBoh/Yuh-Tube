import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function VideoItem({video, key}) {

  // const history = useHistory(); ??
  const dispatch = useDispatch();


  function deleteVideos(id) {
    // console.log("video.id:", video.id); DELETE VIDEO WORKS

    dispatch({
      type: 'SAGA/DELETE_VIDEOS',
      payload: id
    })
  }

  return (
    <li key={key}>
      <a href={video.video_url}>
        {video.video_url}
      </a>
      <button onClick={() => deleteVideos(video.id)}>DELETE</button>
    </li>
  )
}
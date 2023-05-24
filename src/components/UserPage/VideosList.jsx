import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// IMPORT VIDEOITEM.JSX
import VideoItem from './VideoItem';

export default function VideosList() {
  useEffect(() => {
    dispatch({
      type: 'FETCH_VIDEOS'
    })
  }, [])

  const dispatch = useDispatch();

  const videos = useSelector((store) => store.videos)

  return (
    <ul>
      {
        videos.map(video => {
          return <VideoItem key={video.id} video={video} />
        })
      }
    </ul>
  )
}


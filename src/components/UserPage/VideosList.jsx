import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// IMPORT VIDEOITEM.JSX
import VideoItem from './VideoItem';

export default function VideosList() {

  const videos = useSelector((store) => store.videos)

  return (
    <ul>
      {
        videos.map(video => {
          return (
            <VideoItem key={video.id} video={video} />
          )
        })
      }
    </ul>
  )
}


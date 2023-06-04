import { useSelector } from 'react-redux';
// IMPORT VIDEOITEM.JSX
import VideoItem from './VideoItem';
import './UserPage.css';
import './VideosList.css';

export default function VideosList() {

  const videos = useSelector((store) => store.videos);
  console.log("VIDEO:", videos);

  return (
    <div className="video-grid">
      {
        videos.map(video => {
          return (
            <VideoItem key={video.id} video={video}/>
          )
        })
      }
    </div>
  )
}


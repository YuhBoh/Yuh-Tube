import { React } from 'react';
import '../Nav/Nav.css'; //Will make own css later
import VideoOptions from './VideoOptions/VideoOptions';

export default function VideoItem({video}) {

  return (
    <li>
      <div>
        <a href={video.video_url}>
          {video.video_url}
        </a>   
        
        <VideoOptions video={video}/>
      </div>
      
    </li>
  )
}
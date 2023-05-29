import { React } from 'react';
import '../Nav/Nav.css'; //Will make own css later
import VideoOptions from '../VideoOptions/VideoOptions';
import './styles/VideoItem.css';


export default function VideoItem({video}) {

  return (
    <li>
      <div className='video-item-container'>
        <a href={video.video_url}>
          {video.video_url}
        </a>   
        
        <VideoOptions video={video}/>
      </div>
      
    </li>
  )
}
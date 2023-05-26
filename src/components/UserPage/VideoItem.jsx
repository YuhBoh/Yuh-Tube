import { React, useState } from 'react';
import '../Nav/Nav.css'; //Will make own css later
import VideoOptions from '../VideoOptions/VideoOptions';


export default function VideoItem({video}) {

  return (
    <li>
      <a href={video.video_url}>
        {video.video_url}
      </a>
      <div>   
        <VideoOptions video={video}/>
      </div>
    </li>
  )
}
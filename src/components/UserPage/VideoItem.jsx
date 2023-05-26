import { React, useState } from 'react';
import '../Nav/Nav.css'; //Will make own css later
import './VideoItem.css';
import VideoOptions from '../VideoOptions/VideoOptions';
import { useHistory } from 'react-router-dom';


export default function VideoItem({video}) {
  // for first pop-up; currently false
  const [openModal, setOpenModal] = useState(false);

  return (
    <li>
      <a href={video.video_url}>
        {video.video_url}
      </a>
      <div>   
        <VideoOptions />
      </div>
    </li>
  )
}
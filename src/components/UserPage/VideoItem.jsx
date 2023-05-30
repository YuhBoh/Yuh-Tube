import { React } from 'react';
import './VideoItem.css';
import VideoOptions from './VideoOptions/VideoOptions';

export default function VideoItem({video}) {

  return (
    <>
      <div className='video-preview'>
        <div className="thumbnail-row">
          
          <a href={video.video_url} target="_blank">
            <img className="thumbnail"
                src={require("./images/thumbnail.png")} alt="Youtube-Link" />
          </a> 

          <div className='video-options'>
            <VideoOptions video={video}/>
          </div>
        </div>

        <div className="video-info-grid">

          <div className="video-info">
            <a href={video.video_url}>
              <p className="video-title">
                {video.video_url}
              </p>
            </a>
          </div>
          
        </div>

      </div>
    </>
      
        
  )
}
import './SearchApi.css';
import { React } from 'react';
import { useSelector } from 'react-redux';
import VideoOptions from '../UserPage/VideoOptions/VideoOptions';


export default function SearchApi() {
  const videos = useSelector((store) => store.videos);

  return (
    <div className="video-container">
      {/* <div className="video">
        <img src={ require("./images/thumbnail.png")} className="thumbnail" alt="" />
        <div className="content">
          <img src={ require("./images/thumbnail.png")} className="channel-icon" alt="" />
            <div className="info">
              <h4 className="title">blahblahblahblahblah</h4>
              <p className="channel-name">hi</p>
            </div>

        </div>

      </div>
  */}
    </div>
  )
}
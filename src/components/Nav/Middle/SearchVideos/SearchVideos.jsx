import { useDispatch } from 'react-redux';
import './SearchVideos.css';

function SearchVideos(props) {
  const searchVideos=props.search;
  const dispatch = useDispatch();

  return (
    <div className="video-container">
      <div className="video">
            <img src={ require("./images/thumbnail.png")} className="api-thumbnail" alt="" />

            <div className="content">
                <img src={ require("./images/thumbnail.png")} className="channel-icon" alt="" />

              <div className="info">
                <h4 className="title">blahblahblahblahblah</h4>
                <p className="channel-name">hi</p>
              </div>

            </div>

          </div>
       
    </div>
  )

}

export default SearchVideos;
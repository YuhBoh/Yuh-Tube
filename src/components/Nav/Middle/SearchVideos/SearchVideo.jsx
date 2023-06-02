import { useDispatch } from 'react-redux';
import './SearchVideo.css';

function SearchVideo(props) {
  const searchVideos=props.search;
  console.log(searchVideos);
  const thumbnail=searchVideos.snippet.thumbnails.high.url;
  const title=searchVideos.snippet.title;
  const channelTitle=searchVideos.snippet.channelTitle;
  const videoId=searchVideos.id

  return (
    <div className="video-container">
      <div className="video">
        <img src={thumbnail} className="api-thumbnail" alt="" />

        <div className="content">
          <a href={`https://youtube.com/watch?v=${videoId}`}>
            <img src={ require("./images/thumbnail.png")} className="channel-icon" alt="" />
          </a>
            
          <div className="info">
            <a href={`https://youtube.com/watch?v=${videoId}`}>
              <h4 className="title">{title}</h4>
            </a>

            <p className="channel-name">
              {channelTitle}
            </p>
          </div>

        </div>

      </div>
       
    </div>
  )

}

export default SearchVideo;
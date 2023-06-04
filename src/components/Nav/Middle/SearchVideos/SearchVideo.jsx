
import './SearchVideo.css';

function formatVideoCount(count) {
  if (count >= 1000 && count <= 1000000) {
    return `${Math.floor(count / 1000)}K`;
  } else if (count >= 1000000) {
    return `${Math.floor(count / 1000000)}M`;
  }
  return count;
}

function SearchVideo(props) {
  const searchVideos=props.search;
  console.log(searchVideos);
  const thumbnail=searchVideos.snippet.thumbnails.high.url;
  const title=searchVideos.snippet.title;
  const channelTitle=searchVideos.snippet.channelTitle;
  const videoId=searchVideos.id.videoId;
  const channelThumbnail = searchVideos.channelThumbnail;
  const videoCount = searchVideos.videoCount;

  const newVideoCount = formatVideoCount(videoCount);


  return (
    <div className="video-container">
      <div className="video">
        <img src={thumbnail} className="api-thumbnail" alt="" />

        <div className="content">
          <a href={`https://youtube.com/watch?v=${videoId}`}>
            <img src={channelThumbnail} className="channel-icon" alt="" />
          </a>
            
          <div className="info">
            <a href={`https://youtube.com/watch?v=${videoId}`}>
              <h4 className="title">{title}</h4>
            </a>

            <p className="channel-name">
              {channelTitle}
            </p>
            <p class="video-stats">{newVideoCount} views</p>
          </div>

        </div>

      </div>
       
    </div>
  )

}

export default SearchVideo;
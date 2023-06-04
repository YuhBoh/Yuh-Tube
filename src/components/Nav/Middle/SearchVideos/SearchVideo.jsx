import './SearchVideo.css';

function formatVideoCount(count) {
  if (count >= 1000 && count < 1000000) {
    return `${Math.floor(count / 1000)}K`;
  } else if (count >= 1000000) {
    return `${Math.floor(count / 1000000)}M`;
  }
  return count;
}

function SearchVideo(props) {
  const searchVideos=props.search;
  console.log("SEARCHVIDEOS:", searchVideos);
  const thumbnail=searchVideos.snippet.thumbnails.high.url;
  const title=searchVideos.snippet.title;
  const channelTitle=searchVideos.snippet.channelTitle.replace(/\s/g, '');
  const videoId=searchVideos.id.videoId;
  const channelThumbnail = searchVideos.channelThumbnail;
  const videoCount = searchVideos.videoCount;

  const newVideoCount = formatVideoCount(videoCount);


  return (
    <div className="video-container">

      <div className="thumbnail-row">
        <img src={thumbnail} className="api-thumbnail" alt="" />
      </div>  

      <div className="video-info-grid">

        <div className="channel-picture">
          <a href={`https://www.youtube.com/@${channelTitle}`}>
            <img src={channelThumbnail} className="profile-picture" alt="" />
          </a>
        </div>
            
        <div className="api-video-info">
          <a href={`https://youtube.com/watch?v=${videoId}`} target='_blank'>
            <p className="video-title">{title}</p>
          </a>

          <a href={`https://www.youtube.com/@${channelTitle}`} target='_blank'>
            <p className="video-author">
              {channelTitle}
            </p>
          </a>
          

          <p className="video-stats">{newVideoCount} views</p>
        </div>

      </div>
        
    </div>
  )

}

export default SearchVideo;
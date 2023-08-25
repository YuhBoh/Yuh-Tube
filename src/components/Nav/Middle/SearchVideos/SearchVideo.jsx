import './SearchVideo.css';

function formatVideoCount(count) {
  if (count >= 1000 && count < 1000000) {
    return `${Math.floor(count / 1000)}K`;
  } else if (count >= 1000000) {
    return `${Math.floor(count / 1000000)}M`;
  }
  return count;
}

const formatDuration = (time) => {
    const timeArray = time.split("");
    let solvedArray = [];
    let hourArray = [];
    let minuteArray = [];
    let secondArray = [];
    for (let char of timeArray) {
        if (char === "H") {
            let index = timeArray.indexOf("H") - 1;
            while (!isNaN(Number(timeArray[index]))) {
                hourArray.push(timeArray[index]);
                index -= 1;
            }
            hourArray.reverse();
            hourArray.push(":");
        }
        else if (char === "M") {
            let index = timeArray.indexOf("M") - 1;
            while (!isNaN(Number(timeArray[index]))) {
                minuteArray.push(timeArray[index]);
                index -= 1;
            }
            if (minuteArray.length < 2) {
                minuteArray.push("0");
            }
            minuteArray.reverse();
            minuteArray.push(":");
        }
        else if (char === "S") {
            let index = timeArray.indexOf("S") - 1;
            while (!isNaN(Number(timeArray[index]))) {
                secondArray.push(timeArray[index]);
                index -= 1;
            }
            if (secondArray.length < 2) {
                secondArray.push("0");
            }
            secondArray.reverse();
        }
    }
    if (timeArray.includes("H") && minuteArray.length < 1) {
        minuteArray.push("0", "0", ":");
    }
    if (!timeArray.includes("H") && !timeArray.includes("M")) {
        secondArray.unshift("0", ":");
    }
    console.log(hourArray);
    console.log(minuteArray);
    console.log(secondArray);
    return solvedArray.concat(hourArray, minuteArray, secondArray).join("");
};

function SearchVideo(props) {
  const searchVideos=props.search;
  console.log("SEARCHVIDEOS:", searchVideos);
  const thumbnail=searchVideos.snippet.thumbnails.high.url;
  const title=searchVideos.snippet.title;
  const channelTitle=searchVideos.snippet.channelTitle.replace(/\s/g, '');
  const videoId=searchVideos.id.videoId;
  const channelThumbnail = searchVideos.channelThumbnail;
  const videoCount = searchVideos.videoCount;
  const duration = searchVideos.duration;

  const videoDuration = formatDuration(duration);
  console.log("DURATION:", duration);
  

  const newVideoCount = formatVideoCount(videoCount);


  return (
    <div className="video-container">

      <div className="thumbnail-row">
        <img src={thumbnail} className="api-thumbnail" alt="" />
        <div class="video-time">{videoDuration}</div>
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
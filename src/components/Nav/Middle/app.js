let api_key="AIzaSyAzSnUQoXRgbrwXrMtOm-3vDhx1SYwzFHY";

let video_http="https://www.googleapis.com/youtube/v3/videos?";

fetch(video_http + new URLSearchParams({
  key: api_key,
  part: 'snippet',
  chart: 'mostPopular',
  maxResult: 1,
}))
.then(res => res.json())
.then(data => {
  console.log(data);
})
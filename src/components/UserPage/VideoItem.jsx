import { useHistory } from 'react-router-dom';

export default function VideoItem({video}) {
  const history = useHistory();

  return (
    <li>
      <a href={video.video_url}>{video.video_url}</a>
    </li>
  )
}
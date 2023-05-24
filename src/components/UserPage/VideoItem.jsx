import { useHistory } from 'react-router-dom';

export default function VideoItem({video}) {
  const history = useHistory();

  return (
    <li>
      {video.video_url}
    </li>
  )
}
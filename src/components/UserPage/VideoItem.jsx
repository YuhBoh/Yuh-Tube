import { useHistory } from 'react-router-dom';

export default function VideoItem({video}, {key}) {
  // const history = useHistory(); ??

  return (
    <li key={key}>
      <a href={video.video_url}>
        {video.video_url}
      </a>
    </li>
  )
}
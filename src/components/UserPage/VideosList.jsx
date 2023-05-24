import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function VideosList() {
  useEffect(() => {
    dispatch({
      type: 'FETCH_VIDEOS'
    })
  }, [])

  const dispatch = useDispatch();

  const videos = useSelector((store) => store.videos)

  return (
    <ul>
      {
        <h1>hi</h1>
      }
    </ul>
  )
}


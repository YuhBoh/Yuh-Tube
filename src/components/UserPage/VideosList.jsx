import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function VideosList() {
  useEffect(() => {
    dispatch({
      type: 'FETCH_VIDEOS'
    })
  }, [])

  const dispatch = useDispatch();

  return (
    <ul>
      {
        
      }
    </ul>
  )
}
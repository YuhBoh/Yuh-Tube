import { React, useState } from 'react';
import "./Upload.css";
import { useDispatch } from 'react-redux';

const Upload = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [videosInput, setVideosInput] = useState('');

  const addVideos = (event) => {
    event.preventDefault();

    dispatch({ 
      type: 'SAGA/ADD_URL', 
      payload: videosInput 
    });
    // console.log('urlInput:', urlInput); POST WORKS
  }

    return (
      <>
        <div className='modalBackground'>
          <div className='modalContainer'>
            <div className='closeBtn'>
              <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className='title'>
              <h1>Upload Video</h1>
            </div>
            <div className='body'>
              <form>
                <input type='text' 
                     placeholder='url'
                     value={videosInput}
                     onChange={event => setVideosInput(event.target.value)}>
                </input>
              </form>
              
            </div>
            <div className='footer'>
             <button onClick={addVideos}
             >SUBMIT
             </button>  
            </div>
           
          </div>
        </div>
      </>
    )
};

export default Upload;
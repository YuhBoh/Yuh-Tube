import React from 'react';
import { useState } from 'react';
import "./Upload.css";
import { useDispatch } from 'react-redux';

const Upload = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [urlInput, setUrlInput] = useState('');

  const handleClick = () => {
    addUrl;
  }

  const addUrl = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_URL', payload: urlInput });
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
              <form onSubmit={addUrl}>
                <input type='text' 
                     placeholder='url'
                     value={urlInput}
                     onChange={event => setUrlInput(event.target.value)}>
                </input>
              </form>
              
            </div>
            <div className='footer'>
             <button onClick={handleClick}>SUBMIT</button>  
            </div>
           
          </div>
        </div>
      </>
    )
};

export default Upload;
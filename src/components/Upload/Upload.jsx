import React from 'react';
import { useState } from 'react';
import "./Upload.css";

const Upload = ({ closeModal }) => {
  const handleDelete = () => {
    console.log('DELETE:');
  }
  
  const handleClick = () => {
    console.log('INPUT:', urlInput);
  }

  const [urlInput, setUrlInput] = useState('');
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
              <input type='text' 
                     placeholder='url'
                     onChange={event => setUrlInput(event.target.value)}>
              </input>
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
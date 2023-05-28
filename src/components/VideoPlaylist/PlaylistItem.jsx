import { React } from 'react';
import "./PlaylistItem.css";


export default function PlaylistItem ({playlist}) {

  return (
      <div className='item-container'>
        <div className='checkbox'>

        </div>

        <div>
          {playlist.playlist_name}
        </div>

        <div className='options-container'>
          <button>
            EDIT
          </button>
          <button>
            DELETE
          </button>
        </div>
        
      </div>
  )
}
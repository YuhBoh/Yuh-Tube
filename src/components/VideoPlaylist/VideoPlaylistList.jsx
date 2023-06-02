import { React } from 'react';
import { useSelector } from "react-redux";
import PlaylistItem from './PlaylistItem';

export default function VideoPlaylistList() {

  // grabs information from _root.reducer.
  const playlists = useSelector((store) => store.playlists);

  return (
    <div>
      {
        playlists.map(playlist => {
          return (
            <PlaylistItem key={playlist.id} playlist={playlist}/>
          )
        })
      }
    </div>
  )
};
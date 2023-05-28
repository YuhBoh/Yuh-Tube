import { React } from 'react';
import { useSelector } from "react-redux";
import PlaylistItem from './PlaylistItem';

export default function VideoPlaylistList() {

  const playlists = useSelector((store) => store.playlists);
  // Their is no playlists in reducer store. go to root.reducer

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
};//WORK ON PLAYLIST TODAY GET/DELETE/UPDATE
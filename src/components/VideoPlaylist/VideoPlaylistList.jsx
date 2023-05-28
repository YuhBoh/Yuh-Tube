import { React } from 'react';
import { useSelector } from "react-redux";
import PlaylistItem from './PlaylistItem';

export default function VideoPlaylistList() {

  const playlists = useSelector((store) => store.playlists);
  // Their is no playlists in reducer store. go to root.reducer

  return (
    <ul>
      {
        playlists.map(playlist => {
          return (
            <PlaylistItem key={playlist.id} playlist={playlist}/>
          )
        })
      }
    </ul>
  )
};//WORK ON PLAYLIST TODAY GET/DELETE/UPDATE
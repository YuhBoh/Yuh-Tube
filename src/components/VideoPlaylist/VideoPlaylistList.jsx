import { React } from 'react';
import { useSelector } from "react-redux";
import PlaylistItem from './PlaylistItem';

export default function VideoPlaylistList() {

  const playlists = useSelector((store) => store.playlists);

  return (
    <p>hi</p>
  )

};//WORK ON PLAYLIST TODAY GET/DELETE/UPDATE
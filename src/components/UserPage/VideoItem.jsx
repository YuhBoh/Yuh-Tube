import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.css'; //Will make own css later
import Playlist from './Playlist';
import { useHistory } from 'react-router-dom';


export default function VideoItem({video}) {

  const [openModal, setOpenModal] = useState(false);

  return (
    <li>
      <a href={video.video_url}>
        {video.video_url}
      </a>
      <Link onClick={() => {setOpenModal(true);}}
            className="navLink"
            to="/user">
        ...
      </Link>
      {openModal && <Playlist closeModal={setOpenModal} />}
    </li>
  )
}
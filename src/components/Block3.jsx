import React from 'react'
import Chat from '../pages/Chat'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import {
  Routes,
  Route,
} from "react-router-dom";
import Video from '../pages/Video';
import Explore from '../pages/Explore';

const Block3 = () => {
  return (
    <div className='block3'>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='explore' element={<Explore />} />
        <Route path='video/:id' element={<Video />} />
        <Route path='chat' element={<Chat />} />
        <Route path='profile/:id' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default Block3
import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../imgs/avatar.png'

const Create = () => {
  return (
    <div id='create'>
      <div>
        <Link to='profile/43'>
          <img className='user' src={avatar} alt="" />
        </Link>
        <span>Bạn đang nghĩ gì?</span>
      </div>
      <div className="hr"></div>
      <div>
        <div>
          <i class='bx bxs-video'></i>
          <span style={{whiteSpace: 'nowrap'}}>Video trực tiếp</span>
        </div>
        <div>
          <i class='bx bxs-image' ></i>
          <span>Ảnh/video</span>
        </div>
        <div>
          <i class='bx bxs-smile' ></i>
          <span>Feeling/activity</span>
        </div>
      </div>
    </div>
  )
}

export default Create
import React from 'react'
import Post from '../components/Post'

const Profile = () => {
  return (
    <div className='profile'>
      <img className='background' src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <div className='content-user'>
        <img className='avatar-user' src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="follow">10.8K Like<br />2.2K Follow</div>
        <div className="name">My Linh (Yun Meilin) Duong</div>
        <div className="desc">IT Major Student | Java Back-End Developer | Hands-on experience with open-source tools, multiple tech stack | DevOps/AI/ML Engineer Intern</div>
        {/* <div style={{margin: '0 -30px'}}><Post /></div> */}
      </div>
    </div>
  )
}

export default Profile
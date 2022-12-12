import React from 'react'
import { Link } from 'react-router-dom'

const Block2 = () => {
  return (
    <div className='block2'>
      <span>Tài khoản được đề xuất</span>
      <Link to={'profile/gfds'} style={{textDecoration: 'none'}}>
        <div className="user">
          <img src='https://picsum.photos/200/301' alt="" />
          <div className="info">
            <span>Name</span>
            <p>Description</p>
          </div>
        </div>
      </Link>
      <Link to={'profile/gfds'} style={{textDecoration: 'none'}}>
        <div className="user">
          <img src='https://picsum.photos/200/300' alt="" />
          <div className="info">
            <span>Name</span>
            <p>Description</p>
          </div>
        </div>
      </Link>
      <Link to={'profile/gfds'} style={{textDecoration: 'none'}}>
        <div className="user">
          <img src='https://picsum.photos/200/302' alt="" />
          <div className="info">
            <span>Name</span>
            <p>Description</p>
          </div>
        </div>
      </Link>
      <Link to={'profile/gfds'} style={{textDecoration: 'none'}}>
        <div className="user">
          <img src='https://picsum.photos/200/303' alt="" />
          <div className="info">
            <span>Name</span>
            <p>Description</p>
          </div>
        </div>
      </Link>
      <Link to={'profile/gfds'} style={{textDecoration: 'none'}}>
        <div className="user">
          <img src='https://picsum.photos/200/304' alt="" />
          <div className="info">
            <span>Name</span>
            <p>Description</p>
          </div>
        </div>
      </Link>
      <span>Xem tất cả</span>
      <div className="hr"></div>
      <span>Nhóm của bạn</span>
      <div className="user">
        <img src='https://picsum.photos/200/305' alt="" />
        <div className="info">
          <span>Name</span>
          <p>Description</p>
        </div>
      </div>
      <div className="user">
        <img src='https://picsum.photos/200/306' alt="" />
        <div className="info">
          <span>Name</span>
          <p>Description</p>
        </div>
      </div>
      <div className="user">
        <img src='https://picsum.photos/200/308' alt="" />
        <div className="info">
          <span>Name</span>
          <p>Description</p>
        </div>
      </div>
    </div>
  )
}

export default Block2
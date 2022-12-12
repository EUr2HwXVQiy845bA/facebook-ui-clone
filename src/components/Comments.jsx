import React from 'react'
import avatar from '../imgs/avatar.png'

const Comments = () => {
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className='comments'>
      <div className="hr-5"></div>
      <div className='select'>Phù hợp nhất<i class='bx bx-chevron-down'></i></div>
      <div className="create">
        <img src={avatar} alt="" />
        <div className='input'>
          <input type="text" placeholder='Viết bình luận...'/>
          <div>Nhấn enter để đăng</div>
        </div>
      </div>
      {comments.map(e => (
        <div className="comment">
        <img src={e.profilePicture} className='avatar' alt="" />
        <div>
          <span className="name">{e.name}</span>
          <span className="time">3 giờ trước</span>
          <div className="content">{e.desc}</div>
          <div className="expand">18 phản hồi<i class='bx bx-chevron-down'></i></div>
        </div>
        <div className='heart'><i class='bx bx-heart' ></i>2.2K</div>
        <div className="desc">Nhấn chuột phải để thêm tùy chọn</div>
      </div>
      ))}
      <div className="comment">
        <img src={avatar} className='avatar' alt="" />
        <div>
          <span className="name">Nguyễn Thế Anh</span>
          <span className="time">3 giờ trước</span>
          <div className="content">fasdfasfafdasdfa</div>
          <div className="expand">18 phản hồi<i class='bx bx-chevron-down'></i></div>
        </div>
        <div className='heart'><i class='bx bx-heart' ></i>2.2K</div>
        <div className="desc">Nhấn chuột phải để thêm tùy chọn</div>
      </div>
    </div>
  )
}

export default Comments
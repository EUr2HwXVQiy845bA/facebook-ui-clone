import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import postImage from '../imgs/postImage.jpeg'
import Comments from './Comments'

const Post = () => {
  const [commentOpen, setCommentOpen] = useState(true);
  const [like, setLike] = useState(true)
  return (
    <>
    <div className='post'>
      <div className='head'>
        <Link to={'profile/fsdaf'}>
          <img className='user' src='https://picsum.photos/200/307' alt="" />
        </Link>
        <div className="info">
          <div className="name">Nguyễn Huy Hùng</div>
          <div className="time">
            <span>3 giờ . </span>
            <i class='bx bx-world' ></i>
          </div>
        </div>
        <i class='bx bx-dots-horizontal-rounded' ></i>
      </div>
      <div className="cap">
      CÙNG LAY'S CHUNG VUI, TẾT LÀ VUI CHUNG 🥰
Tết siêu đoàn tụ sao có thể thiếu “trợ thủ" snack Khoai tây Lay's ngon giòn giã? 
Cùng Lay's khuấy động niềm vui, sẻ chia khoảnh khắc chung vui cùng đại gia đình mùa Tết này các bạn nha. Khui ngay!
      </div>
      <div className="content">
        <img src={postImage} alt="" />
      </div>
      <div className="foot">
        <div className="reacted">
          <i class='bx bx-smile' ></i>
          <i class='bx bx-smile' ></i>
          <i class='bx bx-smile' ></i>
          <span>
            {like ? 'Bạn và 2.2K người khác' : '2.2K'}
          </span>
        </div>
        <div className="commented" onClick={() => setCommentOpen(!commentOpen)}>145 bình luận</div>
        <div className="shared">22 chia sẻ</div>
      </div>
      <div className="hr-5"></div>
      <div className="foot2">
        <div className="react" onClick={() => setLike(!like)}>
          {like ? <i class='bx bxs-like'></i> : <i class='bx bx-like'></i>}
          <span>Thích</span>
        </div>
        <div className="comment" onClick={() => setCommentOpen(!commentOpen)}>
          <i class='bx bx-comment-dots' ></i>
          <span>Bình luận</span>
        </div>
        <div className="share">
          <i class='bx bx-share' ></i>
          <span>Chia sẻ</span>
        </div>
      </div>
      {commentOpen && <Comments />}
    </div>
    <div className='post'>
    <div className='head'>
      <img className='user' src='https://picsum.photos/200/302' alt="" />
      <div className="info">
        <div className="name">Lê Văn Toàn</div>
        <div className="time">
          <span>3 giờ . </span>
          <i class='bx bx-world' ></i>
        </div>
      </div>
      <i class='bx bx-dots-horizontal-rounded' ></i>
    </div>
    <div className="cap">
    CÙNG LAY'S CHUNG VUI, TẾT LÀ VUI CHUNG 🥰
Tết siêu đoàn tụ sao có thể thiếu “trợ thủ" snack Khoai tây Lay's ngon giòn giã? 
Cùng Lay's khuấy động niềm vui, sẻ chia khoảnh khắc chung vui cùng đại gia đình mùa Tết này các bạn nha. Khui ngay!
    </div>
    <div className="content">
      <img src={postImage} alt="" />
    </div>
    <div className="foot">
      <div className="reacted">
        <i class='bx bx-smile' ></i>
        <i class='bx bx-smile' ></i>
        <i class='bx bx-smile' ></i>
        <span>2,2K</span>
      </div>
      <div className="commented">145 bình luận</div>
      <div className="shared">22 chia sẻ</div>
    </div>
    <div className="hr-5"></div>
    <div className="foot2">
      <div className="react">
        <i class='bx bx-like'></i>
        <span>Thích</span>
      </div>
      <div className="comment">
        <i class='bx bx-comment-dots' ></i>
        <span>Bình luận</span>
      </div>
      <div className="share">
        <i class='bx bx-share' ></i>
        <span>Chia sẻ</span>
      </div>
    </div>
  </div>
    <div className='post'>
    <div className='head'>
      <img className='user' src='https://picsum.photos/200/304' alt="" />
      <div className="info">
        <div className="name">Nguyễn Huy Hùng</div>
        <div className="time">
          <span>3 giờ .</span>
          <i class='bx bx-world' ></i>
        </div>
      </div>
      <i class='bx bx-dots-horizontal-rounded' ></i>
    </div>
    <div className="cap">
    CÙNG LAY'S CHUNG VUI, TẾT LÀ VUI CHUNG 🥰
Tết siêu đoàn tụ sao có thể thiếu “trợ thủ" snack Khoai tây Lay's ngon giòn giã? 
Cùng Lay's khuấy động niềm vui, sẻ chia khoảnh khắc chung vui cùng đại gia đình mùa Tết này các bạn nha. Khui ngay!
    </div>
    <div className="content">
      <img src={postImage} alt="" />
    </div>
    <div className="foot">
      <div className="reacted">
        <i class='bx bx-smile' ></i>
        <i class='bx bx-smile' ></i>
        <i class='bx bx-smile' ></i>
        <span>2,2K</span>
      </div>
      <div className="commented">145 bình luận</div>
      <div className="shared">22 chia sẻ</div>
    </div>
    <div className="hr-5"></div>
    <div className="foot2">
      <div className="react">
        <i class='bx bx-like'></i>
        <span>Thích</span>
      </div>
      <div className="comment">
        <i class='bx bx-comment-dots' ></i>
        <span>Bình luận</span>
      </div>
      <div className="share">
        <i class='bx bx-share' ></i>
        <span>Chia sẻ</span>
      </div>
    </div>
  </div>
    <div className='post'>
    <div className='head'>
      <img className='user' src='https://picsum.photos/209/300' alt="" />
      <div className="info">
        <div className="name">Nguyễn Huy Hùng</div>
        <div className="time">
          <span>3 giờ . </span>
          <i class='bx bx-world' ></i>
        </div>
      </div>
      <i class='bx bx-dots-horizontal-rounded' ></i>
    </div>
    <div className="cap">
    CÙNG LAY'S CHUNG VUI, TẾT LÀ VUI CHUNG 🥰
Tết siêu đoàn tụ sao có thể thiếu “trợ thủ" snack Khoai tây Lay's ngon giòn giã? 
Cùng Lay's khuấy động niềm vui, sẻ chia khoảnh khắc chung vui cùng đại gia đình mùa Tết này các bạn nha. Khui ngay!
    </div>
    <div className="content">
      <img src={postImage} alt="" />
    </div>
    <div className="foot">
      <div className="reacted">
        <i class='bx bx-smile' ></i>
        <i class='bx bx-smile' ></i>
        <i class='bx bx-smile' ></i>
        <span>2,2K</span>
      </div>
      <div className="commented">145 bình luận</div>
      <div className="shared">22 chia sẻ</div>
    </div>
    <div className="hr-5"></div>
    <div className="foot2">
      <div className="react">
        <i class='bx bx-like'></i>
        <span>Thích</span>
      </div>
      <div className="comment">
        <i class='bx bx-comment-dots' ></i>
        <span>Bình luận</span>
      </div>
      <div className="share">
        <i class='bx bx-share' ></i>
        <span>Chia sẻ</span>
      </div>
    </div>
  </div>
</>
  )
}

export default Post
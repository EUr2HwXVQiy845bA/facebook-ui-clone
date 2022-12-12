import React from 'react'
import Create from '../components/Create'
import Post from '../components/Post'
import Stories from '../components/Stories'

const Home = () => {
  return (
    <div className="block3-child">
      <Stories />
      <Create />
      <Post />
    </div>
  )
}

export default Home
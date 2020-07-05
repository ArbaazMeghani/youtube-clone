import React from 'react'
import VideoList from '../common/VideoList'
import { VideoItem } from './components'

const Home = ({videos}) => {

  const handleVideoSelect = (video) => {
    console.log(video)
  }

  return (
    <VideoList videos={videos} onVideoSelect={handleVideoSelect} VideoItem={VideoItem} />
  )
}

export default Home
import React from 'react'
import VideoList from '../common/VideoList'
import { VideoItem } from './components'
import { useHistory } from 'react-router-dom'

const Home = ({videos, onVideoSelect}) => {
  let history = useHistory()

  const handleVideoSelect = (video) => {
    onVideoSelect(video)
    history.push("/watch")
  }

  return <VideoList videos={videos} onVideoSelect={handleVideoSelect} VideoItem={VideoItem} />
}

export default Home
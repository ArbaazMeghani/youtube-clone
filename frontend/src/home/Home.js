import React, { useEffect } from 'react'
import VideoList from '../common/VideoList'
import { VideoItem } from './components'
import { useHistory } from 'react-router-dom'
import { retrieveVideos } from '../api'

const Home = ({videos, updateVideos, searchQuery, onVideoSelect}) => {
  let history = useHistory()

  useEffect(() => {
    const fetchData = async () => await retrieveVideos(searchQuery, updateVideos)
    fetchData()
  }, [searchQuery])

  const handleVideoSelect = (video) => {
    onVideoSelect(video)
    history.push("/watch")
  }

  return <VideoList videos={videos} onVideoSelect={handleVideoSelect} VideoItem={VideoItem} />
}

export default Home
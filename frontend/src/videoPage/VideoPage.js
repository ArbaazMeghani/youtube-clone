import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { VideoDetail, VideoItem } from './components'
import { VideoList } from '../common'

const VideoPage = ({videos, initialSelectedVideo}) => {
  const [selectedVideo, setSelectedVideo] = useState(initialSelectedVideo)

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <Grid container spacing={5} justify="center">
      <Grid item xs={8}>
        <VideoDetail video={selectedVideo}/>
      </Grid>
      <Grid item xs={4}>
        <VideoList videos={videos} onVideoSelect={handleVideoSelect} VideoItem={VideoItem}/>
      </Grid>
    </Grid>
  )
}

export default VideoPage
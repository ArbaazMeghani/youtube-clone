import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { VideoDetail, VideoList } from './components'

const VideoPage = ({videos}) => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0])

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <Grid container spacing={5} justify="center">
      <Grid item xs={8}>
        <VideoDetail video={selectedVideo}/>
      </Grid>
      <Grid item xs={4}>
        <VideoList videos={videos} onVideoSelect={handleVideoSelect}/>
      </Grid>
    </Grid>
  )
}

export default VideoPage
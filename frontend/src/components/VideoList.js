import React from 'react'
import { Grid } from '@material-ui/core'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
  const videoItems = videos.map(video => <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id}/>)
  return (
    <Grid container spacing={5}>
      {videoItems}
    </Grid>
  )
}

export default VideoList
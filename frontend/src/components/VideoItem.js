import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({video}) => {
  return (
    <h1>{video.title}</h1>
  )
}

export default VideoItem
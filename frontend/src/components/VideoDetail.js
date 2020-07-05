import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({video}) => {
  return (
    <>
      <Paper elevation={6} style={{height: "500px"}}>
        <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={video.url}/>
      </Paper>
      <Paper elevation={6} style={{padding: "15px", marginTop: "2%"}}>
        <Typography variant="h4">{video.title}</Typography>
        <Typography variant="subtitle1">{video.author}</Typography>
        <Typography variant="subtitle2">{video.description}</Typography>
      </Paper>
    </>
  )
}

export default VideoDetail
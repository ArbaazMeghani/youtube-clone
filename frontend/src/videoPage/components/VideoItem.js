import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <Grid item xs={12}>
      <Paper onClick={() => onVideoSelect(video)} style={{display: "flex", alignItems: "center", cursor: "pointer"}}>
        <img style={{marginRight: "20px", height: "120px", widht: "120px"}} alt="thumbnail" src={video.thumbnailUrl} />
        <Typography variant="subtitle1"><b>{video.title}</b></Typography>
      </Paper>
    </Grid>
  )
}

export default VideoItem
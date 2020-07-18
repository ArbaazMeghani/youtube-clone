import React from 'react'
import { Grid, Card, Typography, CardActionArea, CardMedia, CardContent } from '@material-ui/core'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item>
       <Card style={{maxWidth: "250px", height: "280px"}} onClick={() => onVideoSelect(video)}>
         <CardActionArea height="100%">
          <CardMedia style={{height: "140px"}} image={video.thumbnailSrc} title={video.title}/>
            <CardContent style={{height: "140px"}}>
              <Typography variant="subtitle1">{video.title}</Typography>
            </CardContent>
         </CardActionArea>
       </Card>
    </Grid>
  )
}

export default VideoItem
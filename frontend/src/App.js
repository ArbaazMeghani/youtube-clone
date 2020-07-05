import React from 'react';
import { Grid } from '@material-ui/core'
import {SearchBar, VideoList, VideoDetail} from './components'

const App = () => {
  const videos = [{
    id: 1,
    url: "https://www.youtube.com/embed/1vrEljMfXYo",
    title: "John Denver - Take Me Home, Country Roads (Audio)",
    description: "John Denver's official audio for 'Take Me Home, Country Roads', as featured on Fallout 76.",
    author: "John Denver"
  }]

  const handleSubmit = (searchTerm) => {
    console.log(searchTerm)
  }

  return (
    <Grid container spacing={0} justify="center">
      <Grid item xs={11}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit}/>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={videos[0]}/>
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

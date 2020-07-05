import React from 'react';
import { Grid } from '@material-ui/core'
import {SearchBar, VideoList, VideoDetail} from './components'

const App = () => {

  const handleSubmit = (searchTerm) => {
    console.log(searchTerm)
  }

  return (
    <Grid container spacing={10} justify="center">
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit}/>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={{url: "https://youtube.com/"}}/>
          </Grid>
          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

import React, { useState } from 'react';
import VideoPage from './videoPage/VideoPage';
import { SearchBar } from './common';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './home/Home';
import Upload from './upload/Upload';

const App = () => {

  const [videos, setVideos] = useState([])
  const [initialSelectedVideo, setInitialSelectedVideo] = useState('')

  const handleSubmit = (searchTerm) => {
    console.log(searchTerm)
  }

  return (
    <div style={{marginLeft: "2%", marginRight: "2%"}}>
      <BrowserRouter>
      <SearchBar onFormSubmit={handleSubmit}/>
        <Switch>
          <Route exact path="/" render={() => <Home videos={videos} updateVideos={setVideos} onVideoSelect={setInitialSelectedVideo}/>} />
          <Route path="/watch" render={() => <VideoPage videos={videos} initialSelectedVideo={initialSelectedVideo}/>}/>
          <Route path="/upload" component={Upload} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

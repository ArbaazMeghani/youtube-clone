import React, { useState } from 'react';
import VideoPage from './videoPage/VideoPage';
import { SearchBar } from './common';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './home/Home';
import Upload from './upload/upload';

const App = () => {
  const videos = [{
    id: 1,
    url: "https://www.youtube.com/embed/1vrEljMfXYo",
    title: "John Denver - Take Me Home, Country Roads (Audio)",
    description: "John Denver's official audio for 'Take Me Home, Country Roads', as featured on Fallout 76.",
    author: "John Denver",
    thumbnailUrl: "https://i.ytimg.com/vi/1vrEljMfXYo/maxresdefault.jpg"
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/NU9JoFKlaZ0",
    title: "Green Day - Wake Me Up When September Ends [Official Music Video]",
    description: "Wake Me Up When September Ends\" by Green Day from 'American Idiot,' available now.\nDirected by Samuel Bayer\nFeaturing Jamie Bell & Evan Rachel Wood.",
    author: "Green Day",
    thumbnailUrl: "https://cdn.wrytin.com/images/thumbnail/r/400/wake-me-up-when-september-ends-chords-jdag1ses.jpeg"
  }]

  const [initialSelectedVideo, setInitialSelectedVideo] = useState(videos[0])

  const handleSubmit = (searchTerm) => {
    console.log(searchTerm)
  }

  const handleVideoSelect = (video) => {
    setInitialSelectedVideo(video)
  }

  return (
    <div style={{marginLeft: "2%", marginRight: "2%"}}>
      <SearchBar onFormSubmit={handleSubmit}/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home videos={videos} onVideoSelect={handleVideoSelect}/>} />
          <Route path="/watch" render={() => <VideoPage videos={videos} initialSelectedVideo={initialSelectedVideo}/>}/>
          <Route path="/upload" component={Upload} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

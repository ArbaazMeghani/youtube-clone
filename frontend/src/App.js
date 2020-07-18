import React, { useState, useEffect } from 'react';
import VideoPage from './videoPage/VideoPage';
import { SearchBar } from './common';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './home/Home';
import Upload from './upload/Upload';
import Axios from 'axios'

const initialVideos = [{
  videoId: 1,
  videoSrc: "https://www.youtube.com/embed/1vrEljMfXYo",
  title: "John Denver - Take Me Home, Country Roads (Audio)",
  description: "John Denver's official audio for 'Take Me Home, Country Roads', as featured on Fallout 76.",
  author: "John Denver",
  thumbnailSrc: "https://i.ytimg.com/vi/1vrEljMfXYo/maxresdefault.jpg"
},
{
  videoId: 2,
  videoSrc: "https://www.youtube.com/embed/NU9JoFKlaZ0",
  title: "Green Day - Wake Me Up When September Ends [Official Music Video]",
  description: "Wake Me Up When September Ends\" by Green Day from 'American Idiot,' available now.\nDirected by Samuel Bayer\nFeaturing Jamie Bell & Evan Rachel Wood.",
  author: "Green Day",
  thumbnailSrc: "https://cdn.wrytin.com/images/thumbnail/r/400/wake-me-up-when-september-ends-chords-jdag1ses.jpeg"
}]

const App = () => {

  const [videos, setVideos] = useState(initialVideos)
  const [initialSelectedVideo, setInitialSelectedVideo] = useState(videos[0])

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get("http://localhost:8762/video-service/videos")
      setVideos(response.data)
    }
    fetchData()
  }, [])

  const handleSubmit = (searchTerm) => {
    console.log(searchTerm)
  }

  const handleVideoSelect = (video) => {
    setInitialSelectedVideo(video)
  }

  return (
    <div style={{marginLeft: "2%", marginRight: "2%"}}>
      <BrowserRouter>
      <SearchBar onFormSubmit={handleSubmit}/>
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

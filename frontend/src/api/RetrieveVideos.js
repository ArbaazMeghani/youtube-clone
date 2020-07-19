import Axios from 'axios'

const retrieveVideos = async (callback) => {
  const response = await Axios.get("http://localhost:8762/video-service/videos")
  callback(response.data)
}

export default retrieveVideos;
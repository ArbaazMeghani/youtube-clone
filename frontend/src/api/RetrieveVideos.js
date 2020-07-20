import Axios from 'axios'

const retrieveVideos = async (searchQuery, callback) => {
  const response = await Axios.get("http://localhost:8762/video-service/videos", {
    params: {
      searchQuery: searchQuery
    }
  })
  callback(response.data)
}

export default retrieveVideos;
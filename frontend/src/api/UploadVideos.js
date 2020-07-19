import Axios from 'axios'

const uploadVideos = async (video, thumbnail, title, author, description) => {
  let formData = new FormData()
  formData.set("author", author)
  formData.set("title", title);
  formData.set("description", description)
  formData.set("thumbnail", thumbnail)
  formData.set("video", video)

  await Axios.post("http://localhost:8762/video-service/videos", formData)
}

export default uploadVideos
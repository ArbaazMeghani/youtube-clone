import React, { useState } from 'react'
import { UploadButton } from './components'
import { TextField, Grid, Button } from '@material-ui/core'
import Axios from 'axios'

const Upload = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState({name: ''})
  const [video, setVideo] = useState({name: ''})

  const handleSubmit = event => {
    event.preventDefault()

    let formData = new FormData()
    formData.set("author", author)
    formData.set("title", title);
    formData.set("description", description)
    formData.set("thumbnail", thumbnail)
    formData.set("video", video)

    Axios.post("http://localhost:8762/video-service/videos", formData)
  }

  return (
    <form onSubmit={handleSubmit} style={{margin: "5%"}}>
      <Grid container spacing={10} direction="column" alignItems="center" justify="space-evenly">
        <div style={{marginBottom: "2%", marginTop: "2%"}}>
          <Grid container spacing={10} alignItems="center" justify="center">
            <Grid item>
              <UploadButton uploadItem="Video" fileType="video/*" fileName={video.name} onFileUpload={setVideo}/>
            </Grid>
            <Grid item>
              <UploadButton uploadItem="Thumbnail" fileType="image/*" fileName={thumbnail.name} onFileUpload={setThumbnail}/>
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={5} alignItems="center" justify="center">
          <Grid item xs={6}>
            <TextField label="Title" variant="outlined" value={title} onChange={event => setTitle(event.target.value)} fullWidth required />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Author" variant="outlined" value={author} onChange={event => setAuthor(event.target.value)} required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              multiline
              rows={8}
              variant="outlined"
              fullWidth
              required
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained" type="submit">Submit Video</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Upload
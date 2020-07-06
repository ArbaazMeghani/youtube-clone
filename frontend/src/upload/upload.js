import React from 'react'
import { UploadButton } from './components'
import { TextField, Grid, Button } from '@material-ui/core'

const Upload = () => {

  const handleSubmit = event => {
    event.preventDefault()
    console.log("SUBMITTED UPLOAD")
  }

  return (
    <form onSubmit={handleSubmit} style={{margin: "5%"}}>
      <Grid container spacing={10} direction="column" alignItems="center" justify="space-evenly">
        <div style={{marginBottom: "2%"}}>
          <Grid container spacing={10} alignItems="center" justify="center">
            <Grid item>
              <UploadButton uploadItem="Video"/>
            </Grid>
            <Grid item>
              <UploadButton uploadItem="Thumbnail"/>
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={5} alignItems="center" justify="center">
          <Grid item xs={6}>
            <TextField label="Title" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Author" variant="outlined" required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              multiline
              rows={8}
              variant="outlined"
              fullWidth
              required
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
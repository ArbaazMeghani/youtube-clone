import React from 'react'
import { Button, TextField, Grid } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const UploadButton = ({uploadItem, fileType, fileName, onFileUpload}) => {
  const upload = `upload-${uploadItem}`

  return (
    <label htmlFor={upload}>
      <input
        style={{ display: 'none' }}
        id={upload}
        name={upload}
        type="file"
        accept={fileType}
        onChange={event => onFileUpload(event.target.files[0])}
      />
      <Grid container spacing={10} justify="center" alignItems="center">
        <Grid item>
          <Button color="secondary" variant="contained" component="span" startIcon={<CloudUploadIcon />}>
            {uploadItem}
          </Button>
        </Grid>
        <Grid item>
          <TextField value={fileName} disabled label="Choose a file..." required/>
        </Grid>
      </Grid>
    </label>
  )
}

export default UploadButton
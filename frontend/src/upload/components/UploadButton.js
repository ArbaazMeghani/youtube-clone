import React, { useState } from 'react'
import { Input, Button, TextField, Grid } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const UploadButton = ({uploadItem, onFileUpload}) => {
  const upload = `upload-${uploadItem}`
  const [fileName, setFileName] = useState('')

  const handleFileUpload = (event) => {
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = event => {
      onFileUpload(event.target.result)
    }
    setFileName(event.target.value)
  }

  return (
    <label htmlFor={upload}>
      <Input
        style={{ display: 'none' }}
        id={upload}
        name={upload}
        type="file"
        onChange={handleFileUpload}
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
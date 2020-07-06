import React from 'react'
import { Input, Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const UploadButton = () => {
  return (
    <label htmlFor="upload-video">
      <Input
        style={{ display: 'none' }}
        id="upload-video"
        name="upload-video"
        type="file"
      />
      <Button color="secondary" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload button
      </Button>
    </label>
  )
}

export default UploadButton
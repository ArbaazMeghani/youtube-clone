import React from 'react'
import { Input, Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const UploadButton = ({uploadItem}) => {
  return (
    <label htmlFor={`upload-${uploadItem}`}>
      <Input
        style={{ display: 'none' }}
        id={`upload-${uploadItem}`}
        name={`upload-${uploadItem}`}
        type="file"
      />
      <Button color="secondary" variant="contained" startIcon={<CloudUploadIcon />}>
        {uploadItem}
      </Button>
    </label>
  )
}

export default UploadButton
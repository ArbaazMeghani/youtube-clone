import React from 'react'
import { Input, Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const UploadButton = ({uploadItem, onFileUpload}) => {
  const upload = `upload-${uploadItem}`
  return (
    <label htmlFor={upload}>
      <Input
        style={{ display: 'none' }}
        id={upload}
        name={upload}
        type="file"
        onChange={event => onFileUpload(event.target.files)}
      />
      <Button color="secondary" variant="contained" component="span" startIcon={<CloudUploadIcon />}>
        {uploadItem}
      </Button>
    </label>
  )
}

export default UploadButton
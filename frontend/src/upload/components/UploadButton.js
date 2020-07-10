import React from 'react'
import { Input, Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const UploadButton = ({uploadItem, onFileUpload}) => {
  const upload = `upload-${uploadItem}`

  const handleFileUpload = (event) => {
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = event => {
      onFileUpload(event.target.result)
    }
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
      <Button color="secondary" variant="contained" component="span" startIcon={<CloudUploadIcon />}>
        {uploadItem}
      </Button>
    </label>
  )
}

export default UploadButton
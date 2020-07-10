import React, { useState } from 'react'
import { Input, Button, TextField } from '@material-ui/core'
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
      <Button color="secondary" variant="contained" component="span" startIcon={<CloudUploadIcon />}>
        {uploadItem}
      </Button>
      <TextField value={fileName} disabled label="Choose a file..." required/>
    </label>
  )
}

export default UploadButton
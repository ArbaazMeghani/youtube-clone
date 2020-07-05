import React from 'react'
import { Paper, TextField} from '@material-ui/core'
import {useState} from 'react'

const SearchBar = ({onFormSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("SUBMIT")
    onFormSubmit(searchTerm)
    setSearchTerm('')
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Paper elevation={6} style={{padding: "25px"}}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="search..." value={searchTerm} onChange={handleChange}/>
      </form>
    </Paper>
  )
}

export default SearchBar
import React, { useState } from 'react'
import { AppBar, Typography, InputBase, Toolbar, Button} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import SearchBarStyles from './styles/SearchBarStyles'
import { Link, useHistory } from 'react-router-dom'

const SearchBar = ({onFormSubmit}) => {
  const classes = SearchBarStyles()
  let history = useHistory()

  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event) => {
    if(event.key === "Enter") {
      event.preventDefault()
      onFormSubmit(searchTerm)
      setSearchTerm('')
    }
  }

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>YouTube Clone</Link>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                onKeyPress={handleSubmit}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
              onClick={() => history.push("/upload")}
            >
              Upload
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default SearchBar
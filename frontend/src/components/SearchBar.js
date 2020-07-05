import React from 'react'
import { AppBar, Typography, InputBase, Toolbar, Button} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { fade, makeStyles } from '@material-ui/core/styles';
import {useState} from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: '10%',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  button: {
    marginLeft: '10%',
    marginRight: '5%'
  },
}))

const SearchBar = ({onFormSubmit}) => {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event) => {
    if(event.key === "Enter") {
      event.preventDefault()
      console.log("SUBMIT")
      onFormSubmit(searchTerm)
      setSearchTerm('')
    }
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              YouTube Clone
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
                onChange={handleChange}
                onKeyPress={handleSubmit}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default SearchBar
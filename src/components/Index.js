import React, { Component } from 'react'
import {
  withStyles
} from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'
import logo from '../assets/images/logo.png'
import ImageUploader from './ImageUploader/ImageUploader'
import Fab from '@material-ui/core/Fab'

const styles = theme => ({
  container: {
    background: '#038868',
    height: '100vh',
    minHeight: '100vh'
  },
  header: {
    color: 'white'
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 100
  },
  fullNameInput: {
    textAlign: 'center'
  },
  nextButton: {
    minWidth: 250,
    marginTop: 50
  },
  label: {
    color: 'white'
  }
})


class Index extends Component {
  next = () => {
    this.props.history.push('/game')
  }
  render() {
    const {
      classes
    } = this.props
    return(
      <Grid container direction='column' alignItems='center' className={ classes.container }>
        <img src={logo} alt="Logo" className={ classes.logo }/>
        <h1 className={ classes.header }>Setup your Profile</h1>
        <ImageUploader />

        <InputLabel htmlFor="player-name" className={ classes.label }>Full Name</InputLabel>
        <Input id='player-name' classes={{ input: classes.fullNameInput }} /> 

        <Fab onClick={ this.next } color='secondary' size='large' variant='extended' className={ classes.nextButton }>
          Next
        </Fab>
      </Grid>
    )
  }
}

export default withStyles( styles )( Index );
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
  label: {
    color: 'white',
    marginTop: 30
  },
  fullNameInput: {
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
    minWidth: 350,
    background: 'white'
  },
  nextButton: {
    minWidth: 250,
    marginTop: 50
  },
})


class Index extends Component {
  next = () => {
    this.props.history.push('/lobby')
  }
  render() {
    const {
      classes
    } = this.props
    return(
      <Grid container direction='column' alignItems='center' className={ classes.container }>
        <img src={logo} alt="Logo" className={ classes.logo }/>
        <h1 className={ classes.header }>Create your Profile</h1>
        <InputLabel htmlFor="player-name" className={ classes.label }>Full Name</InputLabel>
        <Input id='player-name' classes={{ input: classes.fullNameInput }} /> 

        <ImageUploader />

        <Fab onClick={ this.next } color='secondary' size='large' variant='extended' className={ classes.nextButton }>
          Next
        </Fab>
      </Grid>
    )
  }
}

export default withStyles( styles )( Index );

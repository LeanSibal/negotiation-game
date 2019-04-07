import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Timelapse from '@material-ui/icons/Timelapse'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/core/styles'
import logo from '../assets/images/logo.png'

const styles = theme => ({
  container: {
    background: '#038868',
    height: '100vh',
    minHeight: '100vh'
  },
  logo: {
    width: 75,
    height: 75,
    marginTop: 50
  },
  header: {
    color: 'white'
  },
  label: {
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  list: {
    width: '100%',
    maxWidth: 450,
    maxHeight: 350,
    backgroundColor: 'white',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  buttonsContainer: {
    marginTop: 50
  },
  createButton: {
    minWidth: 250,
    margin: 10
  },
  joinButton: {
    minWidth: 250,
    margin: 10
  }
})

class Lobby extends Component {
  createGame = () => {
    this.props.history.push('/pregame')
  }
  joinGame = () => {
    this.props.history.push('/pregame')
  }
  render(){
    const {
      classes
    } = this.props
    return(
      <Grid container direction='column' alignItems='center' className={ classes.container }>
        <img src={ logo } alt="Logo" className={ classes.logo } />
        <h1 className={ classes.header }>
          Create or Join a Game
        </h1>
        <label className={ classes.label }>Select a Game</label>
        <List className={ classes.list }>
          <ListItem>
            <Avatar>
              <Timelapse color="primary"/>
            </Avatar>
            <ListItemText primary="John Doe's Game" secondary='3/5 Players' />
          </ListItem>
          <ListItem>
            <Avatar>
              <Timelapse color="primary"/>
            </Avatar>
            <ListItemText primary="John Doe's Game" secondary='3/5 Players' />
          </ListItem>
          <ListItem>
            <Avatar>
              <Timelapse color="primary"/>
            </Avatar>
            <ListItemText primary="John Doe's Game" secondary='3/5 Players' />
          </ListItem>
          <ListItem>
            <Avatar>
              <Timelapse color="primary"/>
            </Avatar>
            <ListItemText primary="John Doe's Game" secondary='3/5 Players' />
          </ListItem>
          <ListItem>
            <Avatar>
              <Timelapse color="primary"/>
            </Avatar>
            <ListItemText primary="John Doe's Game" secondary='3/5 Players' />
          </ListItem>
          <ListItem>
            <Avatar>
              <Timelapse color="primary"/>
            </Avatar>
            <ListItemText primary="John Doe's Game" secondary='3/5 Players' />
          </ListItem>
          <ListItem>
            <Avatar>
              <Timelapse color="primary"/>
            </Avatar>
            <ListItemText primary="John Doe's Game" secondary='3/5 Players' />
          </ListItem>
          <ListItem>
            <Avatar>
              <Timelapse color="primary"/>
            </Avatar>
            <ListItemText primary="John Doe's Game" secondary='3/5 Players' />
          </ListItem>
        </List>
        <Grid container alignItems='center' justify='center' className={ classes.buttonsContainer }>
          <Fab color='primary' size='large' variant='extended' className={ classes.createButton } onClick={ this.createGame }>Create Game</Fab>
          <Fab color='secondary' size='large' variant='extended' className={ classes.joinButton } onClick={ this.joinGame }>Join Game</Fab>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles( styles )( Lobby )

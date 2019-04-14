import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ListItemText from '@material-ui/core/ListItemText'
import Fab from '@material-ui/core/Fab'
import Delete from '@material-ui/icons/Delete'
import logo from '../assets/images/logo.png'
import { withStyles } from '@material-ui/core/styles'

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
    margin: 20,
    color: 'white'
  },
  searchPlayer: {
    background: 'white',
    minWidth: 450,
    padding: '10px 15px'
  },
  list: {
    marginTop: 20,
    width: '100%',
    maxWidth: 450,
    maxHeight: 350,
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: 0
  },
  listItem: {
    marginBottom: 5,
    background: 'white'
  },
  avatar: {
  },
  playerImage: {
    height: 40,
    width: 40
  },
  startButton: {
    minWidth: 250,
    margin: '20px 10px'
  }
})
class PreGame extends Component {
  backToLobby = () => {
    this.props.history.push('/lobby')
  }
  startGame = () => {
    this.props.history.push('/game')
  }
  render() {
    const {
      classes
    } = this.props
    return(
      <Grid container direction='column' alignItems='center' className={ classes.container }>
        <img src={ logo } alt="Logo" className={ classes.logo } />
        <h1 className={ classes.header }>John Doe's Game</h1>
        <InputLabel htmlFor='search-player' className={ classes.label }>Search for player...</InputLabel>
        <Input
          id='search-player'
          className={ classes.searchPlayer }
          startAdornment={
            <InputAdornment position='start'>
              <Search />
            </InputAdornment>
          }
        />

        <List className={ classes.list }>
          <ListItem className={ classes.listItem }>
            <Avatar className={ classes.avatar }>
              <img src='https://material-ui.com/static/images/avatar/1.jpg' alt="Avatar" className={ classes.playerImage }/>
            </Avatar>
            <ListItemText primary="John Doe"/>
          </ListItem>
          <ListItem className={ classes.listItem }>
            <Avatar className={ classes.avatar }>
              <img src='https://material-ui.com/static/images/avatar/2.jpg' alt="Avatar" className={ classes.playerImage }/>
            </Avatar>
            <ListItemText primary="John Smith"/>
            <Delete/>
          </ListItem>
          <ListItem className={ classes.listItem }>
            <Avatar className={ classes.avatar }>
              <img src='https://material-ui.com/static/images/avatar/3.jpg' alt="Avatar" className={ classes.playerImage }/>
            </Avatar>
            <ListItemText primary="Jane Doe"/>
            <Delete/>
          </ListItem>
          <ListItem className={ classes.listItem }>
            <Avatar className={ classes.avatar }>
              <AccountCircle/>
            </Avatar> 
            <ListItemText primary="Waiting for player..."/>
          </ListItem>
          <ListItem className={ classes.listItem }>
            <Avatar className={ classes.avatar }>
              <AccountCircle/>
            </Avatar> 
            <ListItemText primary="Waiting for player..."/>
          </ListItem>
        </List>
        <Grid container alignItems='center' justify='center'>
          <Fab color='primary' size='large' variant='extended' className={ classes.startButton } onClick={ this.backToLobby }>Back to Lobby</Fab>
          <Fab color='secondary' size='large' variant='extended' className={ classes.startButton } onClick={ this.startGame }>Start Game</Fab>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles( styles )( PreGame )

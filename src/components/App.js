import React, { Component } from 'react'
import { 
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from '@material-ui/core/styles'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import Index from './Index'
import Game from './Game'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#038868'
    },
    secondary: {
      main: '#F5A534'
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 15,
    fontFamily: '"Roboto", sans-serif'
  }
})

const styles = theme => ({
})

class App extends Component {
  render() {
    return(
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/" exact component={Index} />
          <Route path="/game" exact component={Game} />
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default withStyles( styles, { withTheme: true } )( App )

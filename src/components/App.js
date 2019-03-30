import React, { 
  Component 
} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { 
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Timer from './Timer';
import Room from './Room';
import Score from './Score';
import logo from '../assets/images/logo.png';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#038868'
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 15,
    fontFamily: '"Roboto", sans-serif'
  }
});

const styles = theme => ({
  root: {
    background: '#f6f6f6'
  },
  appbar: {
    padding:10
  },
  logo: {
    width:65,
    height:65
  }
});

class App extends Component {
  render() {
    const {
      classes
    } = this.props;
    return (
      <div className={ classes.root} >
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" className={ classes.appbar }>
            <Toolbar>
              <Grid container>
                <Grid item container xs={3} justify="flex-start">
                  <img src={logo} alt="Logo" className={ classes.logo }/>
                </Grid>
                <Grid item container xs={6} justify="center">
                  <Timer />
                </Grid>
                <Grid item container xs={3} justify="flex-end">
                  <Score />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Room />
        </MuiThemeProvider>
      </div>
    );
  }
};

export default withStyles( styles, { withTheme: true } )( App );

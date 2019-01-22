import React, {
  Fragment,
  Component
} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  card: {
    display:'flex',
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
    boxShadow: '0px 0px 20px 5px #44444421',
    border: '5px solid black',
    background: '#038868',
    margin: 10,
    fontSize: 40,
    fontWeight: 700,
    color: 'white'
  },
  doneBtn: {
    minWidth: 250,
    marginTop: 20
  }
});

class ActionButtons extends Component {
  render() {
    const {
      classes
    } = this.props;
    return (
      <Fragment>
        <Grid container>
          <Grid container item xs={6} justify="flex-end">
            <div className={ classes.card }>
              <span>T</span>
            </div>
          </Grid>
          <Grid container item xs={6} justify="flex-start">
            <div className={ classes.card }>
              <span>G</span>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item container xs={12} justify="center">
            <Fab color="primary" size="large" variant="extended" className={ classes.doneBtn }>Done</Fab>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default withStyles( styles )( ActionButtons );

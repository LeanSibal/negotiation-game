import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  icon: {
    color: '#038868',
    fontSize: 50
  },
  box: {
    align: 'center',
    borderRadius: 5,
    width:40,
    height:40,
    border: '2px solid #038868',
    padding: 10,
    margin: 10,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    marginTop: 0,
    textAlign: "center",
    maxWidth: 50
  }
});
class Buttons extends Component {
  render() {
    const {
      classes
    } = this.props;
    return(
      <Grid container>
        <Grid container item xs={3} direction="column" justify="flex-start" alignItems="center">
          <div className={ classes.box }>
            <Icon className={classes.icon}>help</Icon>
          </div>
          <p className={ classes.label }>How to Play</p>
        </Grid>
        <Grid container item xs={3} direction="column" justify="flex-start" alignItems="center">
          <div className={ classes.box }>
            <Icon className={ classes.icon }>cached</Icon>
          </div>
          <p className={ classes.label }>Move History</p>
        </Grid>
        <Grid container item xs={3} direction="column" justify="flex-start" alignItems="center">
          <div className={ classes.box }>
            <Icon className={ classes.icon }>star</Icon>
          </div>
          <p className={ classes.label }>Score Board</p>
        </Grid>
        <Grid container item xs={3} direction="column" justify="flex-start" alignItems="center">
          <div className={ classes.box }>
            <Icon className={ classes.icon }>settings</Icon>
          </div>
          <p className={ classes.label }>Settings</p>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles( styles )( Buttons );


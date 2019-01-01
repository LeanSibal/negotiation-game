import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './Player';
import Table from './Table';

const styles = theme => ({
  player: {
    display: 'flex'
  }
});

function Room(props) {
  const { 
    classes
  } = props;
  return(
    <Fragment>
      <Grid container spacing={40}>
        <Grid item xs={3}/>
        <Grid item xs={3} className={ classes.player } justify="center">
          <Player/>
        </Grid>
        <Grid item xs={3} className={ classes.player } justify="center">
          <Player/>
        </Grid>
        <Grid item xs={3}/>
      </Grid>
      <Grid container spacing={40}>
        <Grid item xs={3} className={ classes.player } justify="flex-end" alignItems="center">
          <Player/>
        </Grid>
        <Grid item xs={6}>
          <Table />
        </Grid>
        <Grid item xs={3} className={ classes.player } justify="flex-start" alignItems="center">
          <Player/>
        </Grid>
      </Grid>
      <Grid container spacing={40}>
        <Grid item xs={3}/>
        <Grid item xs={6} className={ classes.player } justify="center">
          <Player/>
        </Grid>
        <Grid item xs={3}/>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(Room);

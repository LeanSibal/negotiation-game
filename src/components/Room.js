import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Player from './Player';
import Table from './Table';
import Buttons from './Buttons';
import ActionButtons from './ActionButtons';
import ChatBox from './ChatBox';

const styles = theme => ({
  topContainer: {
    marginTop: 10
  }
});

function Room(props) {
  const { 
    classes
  } = props;
  return(
    <Fragment >
      <Grid container className={ classes.topContainer }>
        <Grid item xs={3}/>
        <Grid container item xs={3} justify="center">
          <Player/>
        </Grid>
        <Grid container item xs={3} justify="center">
          <Player/>
        </Grid>
        <Grid item xs={3}/>
      </Grid>
      <Grid container>
        <Grid container item xs={3} justify="flex-end" alignItems="center">
          <Player/>
        </Grid>
        <Grid item xs={6}>
          <Table />
        </Grid>
        <Grid container item xs={3} justify="flex-start" alignItems="center">
          <Player/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}/>
        <Grid container item xs={6} justify="center">
          <Player/>
        </Grid>
        <Grid item xs={3}/>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={4}>
          <Buttons />
        </Grid>
        <Grid item xs={4}>
          <ActionButtons />
        </Grid>
        <Grid item xs={4}>
          <ChatBox />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(Room);

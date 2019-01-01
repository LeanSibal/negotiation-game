import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Action from './Action';

const styles = theme => ({
  table: {
    borderRadius: 60,
    border: '5px solid green',
    padding: 20,
    direction: 'row'
  }
});

function Table(props) {
  const { 
    classes
  } = props;
  return (
    <Fragment>
      <Grid container className={ classes.table } justify="center" direction="row">
        <Grid item>
          <Action/>
        </Grid>
        <Grid item>
          <Action/>
        </Grid>
        <Grid item>
          <Action/>
        </Grid>
        <Grid item>
          <Action/>
        </Grid>
        <Grid item>
          <Action/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(Table);

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Action from './Action';

const styles = theme => ({
  table: {
    borderRadius: 60,
    border: '5px solid #038868',
    padding: 10,
    direction: 'row',
    background: 'white'
  }
});

function Table(props) {
  const { 
    classes
  } = props;
  return (
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
  );
}

export default withStyles(styles)(Table);

import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Action from './Action';

const styles = theme => ({
  table: {
    borderRadius: 30,
    border: '5px solid green',
    padding: 20
  }
});

function Table(props) {
  const { 
    classes
  } = props;
  return (
    <Fragment>
      <Grid container className={ classes.table } justify="center">
        <Action/>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(Table);

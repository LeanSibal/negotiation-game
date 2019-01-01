import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  action: {
    align: 'center',
  },
  name: {
    textAlign: 'center',
    marginBottom: 3
  },
  card: {
    height: 50,
    width: 50,
    justify: "center",
    borderRadius: 3,
    border: '5px solid white',
    //border: '1px dashed white',
    boxShadow: '0px 0px 20px 5px #44444421',
    margin:10,
    background: 'green',
    color: 'white',
    fontWeight: 500
  },
  caption: {
    marginTop: 3,
    textAlign: 'center'
  }
  
});

function Action(props) {
  const {
    classes
  } = props;
  return (
    <Fragment className={ classes.action }>
      <p className={ classes.name }>Eric</p>
      <Grid container className={ classes.card } alignItems="center" justify="center">
        G
      </Grid>
      <p className={ classes.caption}>Take</p>
    </Fragment>
  );
}

export default withStyles(styles)(Action);

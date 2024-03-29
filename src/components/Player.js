import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    width: 100,
    align: 'center',
    height: 130,
    margin: 10
  },
  avatar: {
    width:70,
    height:70,
    borderRadius: '50%',
    border: '5px solid white',
    boxShadow: '0px 0px 20px 5px #44444421',
    marginTop: 10
  },
  money: {
    border: '3px solid orange',
    color: 'white',
    backgroundColor: 'black',
    fontWeight: 700,
    padding: '5px 20px',
    marginTop: -10,
    borderRadius: 20,
    zIndex: 1
  }
});

function Player(props) {
  const { classes } = props;
  return(
    <Grid container item className={classes.container} justify="center" alignItems="center">
      <b>Player</b>
      <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" className={classes.avatar}/>
      <div className={classes.money}>$1000</div>
    </Grid>
  );
}

export default withStyles(styles)(Player);

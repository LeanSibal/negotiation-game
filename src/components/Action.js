import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  action: {
    
  }
  
});

function Action(props) {
  return (
    <Fragment>
      <Grid container className="action">
        <Grid item>
          <p>Action</p>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(Action);

import React, {
  Component
} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
});

class ChatBox extends Component {
  render() {
    const {
      classes
    } = this.props
    return (
      <Grid container>
        <Grid item>
          <p>Chat</p>
          <div className={ classes.chatContainer }>
            <TextField multiline={true}/>
            <div className={ classes.newMessage }>
              <TextField/>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles( styles )( ChatBox );

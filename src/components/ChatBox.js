import React, {
  Component
} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  chatContainer: {
    backgroundColor:'#038868',
    margin:10,
    padding:10,
    borderRadius:5

  },
  chatHistory: {
    minHeight:'90px',
    width:'100%',
    underlineStyle: 'none'
  },
  chatMessage: {
    width:'calc( 100% - 70px )',
    border:'4px solid #03674f',
    borderRadius: '5px',
    background: '#022d22',
    marginRight: 10,
    padding:3,
  },
  input : {
    color:'white',
    fontSize:'11px',
  },
  inputLabel: {
    color:'white',
    fontSize:'11px',
  },
  sendButton: {
    background: '#f5a543',
    borderRadius:'5px'
  }
});

class ChatBox extends Component {
  render() {
    const {
      classes
    } = this.props
    return (
      <Grid container>
        <Grid item xs={12}>
          <div className={ classes.chatContainer }>
            <TextField multiline={true} InputProps={{ disableUnderline: true }} className={ classes.chatHistory } rows="5"/>
            <Grid container>
              <Grid item xs={12}>
                <TextField 
                  className={ classes.chatMessage } 
                  placeholder="Your chat message here..." 
                  InputProps={{ disableUnderline:true, className: classes.input  }}/>
                <Fab color="primary" size="small" className={ classes.sendButton }>
                  <Icon className={ classes.sendIcon } color="primary">
                    send
                  </Icon>
                </Fab>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles( styles, { withTheme: true } )( ChatBox );

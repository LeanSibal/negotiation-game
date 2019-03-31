import React, {
  Component
} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  container: {
    border:'4px solid #03674f',
    background: '#022d22',
    height:50,
    borderRadius:25,
    alignItems: 'center',
    display: 'flex'
  },
  medalContainer: {
    height: '30px',
    width: '30px',
    background: 'white',
    borderRadius: '50%',
    marginLeft: '6px',
    marginTop: '-4px',
  },
  medal: {
    marginTop: '-4px',
    marginLeft: '-4px',
    height:42,
    width:42,
    fontSize:42
  },
  money: {
    padding: '0px 35px 0px 30px',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

class Score extends Component {
  render() {
    const {
      classes
    } = this.props
    return (
      <Grid container justify="flex-end" alignItems="center">
        <Grid item className={classes.container} >
          <div className={ classes.medalContainer }>
            <Icon color="primary" className={ classes.medal }>
              monetization_on
            </Icon>
          </div>
          <span className={ classes.money }>$500</span>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles( styles )( Score );

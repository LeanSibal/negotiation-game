import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  dialog: {
    background: 'none'
  },
  container: {
    minWidth: 500,
    minHeight: 600,
    borderRadius: 5
  },
  header: {
    background: '#038868',
    padding: 15,
    borderTopLeftRadius: 5,
    color: 'white',
    fontSize: 20,
    fontWeight: 700
  },
  playerContainer: {
    padding: 20
  },
  player: {
    background: '#f9fffd',
    margin: '5px 0px',
    padding: 5,
    height: 110
  },
  oddPlayer: {
    background: '#f8f7f7'
  },
  avatar: {
    width:70,
    height:70,
    borderRadius: '50%',
    border: '5px solid white',
    boxShadow: '0px 0px 20px 5px #44444421',
    marginTop: 10
  },
  playerRank: {
    margin: 20,
    fontSize: 20
  },
  playerName: {
    margin: 20,
    fontSize: 20
  },
  playerCashContainer: {
  },
  playerCash: {
    fontSize: 20,
    marginRight: 20
  },
  fullHeight: {
    height: '100%'
  }
})
class LeaderBoard extends Component {
  render() {
    const {
      classes,
      onClose,
      open,
      ...other
    } = this.props
    return (
      <Dialog open={ open } onClose={ onClose } { ...other } classes={ classes.dialog }>
        <Grid container direction="column" className={ classes.container }>
          <Grid item className={ classes.header }>
            Leaderboard
          </Grid>
          <Grid container className={ classes.playerContainer }>
            <Grid container direction="column" justify="space-between" className={ [ classes.player, classes.oddPlayer ].join(" ") }> 
              <Grid item xs={8} className={ classes.fullHeight }>
                <Grid container direction="row" alignItems="center" className={ classes.fullHeight }>
                  <b className={ classes.playerRank }>1</b>
                  <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" className={ classes.avatar } />
                  <p className={ classes.playerName }>Eric Mcbride</p>
                </Grid>
              </Grid>
              <Grid item xs={4} className={ classes.fullHeight }>
                <Grid container direction="row-reverse" alignItems="center" className={ classes.fullHeight }>
                  <b className={ classes.playerCash }>$2000</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="column" justify="space-between" className={ classes.player }> 
              <Grid item xs={8} className={ classes.fullHeight }>
                <Grid container direction="row" alignItems="center" className={ classes.fullHeight }>
                  <b className={ classes.playerRank }>2</b>
                  <Avatar src="https://material-ui.com/static/images/avatar/2.jpg" className={ classes.avatar } />
                  <p className={ classes.playerName }>Aaron Parker</p>
                </Grid>
              </Grid>
              <Grid item xs={4} className={ classes.fullHeight }>
                <Grid container direction="row-reverse" alignItems="center" className={ classes.fullHeight }>
                  <b className={ classes.playerCash }>$1500</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="column" justify="space-between" className={ [ classes.player, classes.oddPlayer ].join(" ") }> 
              <Grid item xs={8} className={ classes.fullHeight }>
                <Grid container direction="row" alignItems="center" className={ classes.fullHeight }>
                  <b className={ classes.playerRank }>3</b>
                  <Avatar src="https://material-ui.com/static/images/avatar/3.jpg" className={ classes.avatar } />
                  <p className={ classes.playerName }>Eric Mcbride</p>
                </Grid>
              </Grid>
              <Grid item xs={4} className={ classes.fullHeight }>
                <Grid container direction="row-reverse" alignItems="center" className={ classes.fullHeight }>
                  <b className={ classes.playerCash }>$500</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="column" justify="space-between" className={ classes.player }> 
              <Grid item xs={8} className={ classes.fullHeight }>
                <Grid container direction="row" alignItems="center" className={ classes.fullHeight }>
                  <b className={ classes.playerRank }>4</b>
                  <Avatar src="https://material-ui.com/static/images/avatar/4.jpg" className={ classes.avatar } />
                  <p className={ classes.playerName }>Luke Parker</p>
                </Grid>
              </Grid>
              <Grid item xs={4} className={ classes.fullHeight }>
                <Grid container direction="row-reverse" alignItems="center" className={ classes.fullHeight }>
                  <b className={ classes.playerCash }>$200</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="column" justify="space-between" className={ [ classes.player, classes.oddPlayer ].join(" ") }> 
              <Grid item xs={8} className={ classes.fullHeight }>
                <Grid container direction="row" alignItems="center" className={ classes.fullHeight }>
                  <b className={ classes.playerRank }>5</b>
                  <Avatar src="https://material-ui.com/static/images/avatar/5.jpg" className={ classes.avatar } />
                  <p className={ classes.playerName }>Gertrude Cortez</p>
                </Grid>
              </Grid>
              <Grid item xs={4} className={ classes.fullHeight }>
                <Grid container direction="row-reverse" alignItems="center" className={ classes.fullHeight }>
                  <b className={ classes.playerCash }>$50</b>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    )
  }
}

export default withStyles( styles )( LeaderBoard )

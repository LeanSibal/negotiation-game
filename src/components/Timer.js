import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  header: {
    marginTop: 10,
    marginBottom: 0,
    textAlign: 'center'
  },
  countDown: {
    marginTop: 10,
    marginBottom: 0,
    textAlign: 'right'
  },
  bar: {
    background: '#03674f',
    borderRadius: 10,
    border: '4px solid #06523f'
  },
  barColor: {
    background: '#f5a543',
    borderRadius: 10
  },
  progressBar: {
    flexGrow: 1
  }
});

class Timer extends Component {
  state = {
    seconds: 90,
    percent: 100,
    counter: 0,
    minute: '',
    second: ''
  }

  componentDidMount() {
    this.setTimers();
    this.timer = setInterval( this.progress, 1000 );
  }

  componentWillUnmount() {
    clearInterval( this.timer );
  }

  setTimers() {
    const {
      seconds,
      counter
    } = this.state;
    const remaining = seconds - counter;
    const minute = Math.floor( remaining / 60 );
    let second = remaining - ( minute * 60 );
    if( second < 10 ) {
      second = "0" + second;
    }
    this.setState({ 
      percent: ( ( remaining ) / seconds ) * 100,
      counter: counter + 1,
      minute: minute,
      second: second
    });
  }

  progress = () => {
    const {
      percent
    } = this.state;

    if( percent === 0 ) {
      this.setState({ 
        percent: 100,
        counter: 1
      });
    } else {
      this.setTimers();
    }
  }

  render() {
    const {
      classes,
    } = this.props;
    const {
      minute,
      second
    } = this.state;
    return (
      <Grid container>
        <Grid container>
          <Grid item xs={3}>
          </Grid>
          <Grid item container xs={6} justify="center">
            <h3 className={ classes.header }>Level 1</h3>
          </Grid>
          <Grid item container xs={3} justify="flex-end">
            <p className={ classes.countdown }>{ minute }:{ second }</p>
          </Grid>
        </Grid>
        <Grid container item>
          <div className={ classes.progressBar }>
            <LinearProgress
              variant="determinate"
              classes={{
                root: classes.bar,
                barColorPrimary: classes.barColor
              }}
              value={ this.state.percent } />
          </div>
        </Grid>
      </Grid>
    );
  }
}

Timer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles( styles )( Timer );

import React, { Component } from 'react'
import {
  withStyles
} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const styles = theme => ({
  fileInput: {
    visibility: 'hidden'
  }
})

class Button extends Component {
  render() {
    const {
      classes,
      onChange
    } = this.props
    return( 
      <Grid container alignItems='center' direction='column'>
        <label htmlFor='single'>
          <FontAwesomeIcon icon={faImage} color='#F5A543' size='5x' />
        </label>
        <input type='file' id='single' className={ classes.fileInput } onChange={ onChange }/>
      </Grid>
    )
  }
}

export default withStyles( styles )( Button )

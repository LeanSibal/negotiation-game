import React, { Component } from 'react'
import {
  withStyles
} from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  deleteButton: {
    marginTop: 10,
    marginLeft: 75,
    marginBottom: -20,
    zIndex: 2
  },
  imageContainer: {
    width: 90,
    height: 90,
    border: '4px solid white',
    borderRadius: '50%',
    overflow: 'hidden'
  },
  image: {
    minHeight: 90,
    minWidth:90
  }
})

class ImagePreview extends Component {
  render() {
    const {
      image,
      removeImage,
      classes
    } = this.props
    return(
      <Grid container alignItems='center' direction='column'>
        <div className={ classes.deleteButton } onClick={ removeImage }>
          <FontAwesomeIcon color='#F5A543' icon={faTimesCircle} size='2x' />
        </div>
        <div className={ classes.imageContainer }>
          <img
            src={ URL.createObjectURL( image ) }
            className={ classes.image }
          />
        </div>
      </Grid>
    )
  }
}

export default withStyles( styles )( ImagePreview )

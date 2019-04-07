import React, { Component } from 'react'
import {
  withStyles 
} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ImagePreview from './ImagePreview'
import Button from './Button'

const styles = theme => ({
  container: {
    marginTop: 50,
    marginBottom: 30
  },
  label: {
    color: 'white'
  }
})

class ImageUploader extends Component {
  state = {
    image: null
  }

  removeImage = () => {
    this.setState({
      image: null
    })
  }
  
  onChange = e => {
    this.setState({
      image: e.target.files[0]
    })
  }

  render() {
    const {
      classes
    } = this.props
    const {
      image
    } = this.state
    const renderContent = () => {
      switch( image ) {
        case null:
          return <Button onChange={ this.onChange }/>
        default:
          return <ImagePreview image={ image } removeImage={ this.removeImage }/>
      }
    }
    return(
      <Grid container alignItems='center' direction='column' className={ classes.container }>
        <label className={ classes.label }>Profile Image</label>
        { renderContent() }
      </Grid>
    )
  }
}

export default withStyles( styles )( ImageUploader )

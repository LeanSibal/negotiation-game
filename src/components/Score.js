import React, {
  Component
} from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({

});

class Score extends Component {
  render() {
    const {
      classes
    } = this.props
    return (
      <div>
        Score
      </div>
    )
  }
}

export default withStyles( styles )( Score );

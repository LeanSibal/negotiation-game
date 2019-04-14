import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  container: {
    minWidth: 600,
    borderRadius: 5
  },
  header: {
    background: '#038868',
    padding: 15,
    borderTopLeftRadius: 5,
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
    minWidth: '100%'
  },
  tableContainer: {
    padding: 20,
    minWidth: '100%'

  },
  playerList: {
    padding: 10
  },
  take: {
    color: '#038868',
    fontWeight:400
  },
  get: {
    color: '#f5a543',
    fontWeight:400
  }
})

class MoveHistory extends Component {
  render() {
    const {
      classes,
      onClose,
      open,
      ...other
    } = this.props
    return(
      <Dialog open={ open } onClose={ onClose } { ...other }>
        <Grid container xs={12} direction="column" className={ classes.container }>
          <Grid item xs={12} className={ classes.header }>
            Move History
          </Grid>
          <Grid container xs={12} className={ classes.tableContainer }>
            <Grid container>
              <Table className={ classes.table }>
                <TableHead>
                  <TableCell>Level</TableCell>
                  <TableCell>Player</TableCell>
                  <TableCell>Move</TableCell>
                  <TableCell>Score</TableCell>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      Level 1
                    </TableCell>
                    <TableCell className={ classes.playerList }>
                      <span>Eric McBride</span><br/>
                      <span>Aaron Parker</span><br/>
                      <span>Gertrude Cortez</span><br/>
                      <span>Luke Parker</span><br/>
                      <span>Me</span>
                    </TableCell>
                    <TableCell>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.get }>Get</span><br/>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.get }>Get</span><br/>
                    </TableCell>
                    <TableCell>
                      <span>+ $500</span><br/>
                      <span>+ $500</span><br/>
                      <span>- $100</span><br/>
                      <span>+ $500</span><br/>
                      <span>+ $500</span><br/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Level 2
                    </TableCell>
                    <TableCell className={ classes.playerList }>
                      <span>Eric McBride</span><br/>
                      <span>Aaron Parker</span><br/>
                      <span>Gertrude Cortez</span><br/>
                      <span>Luke Parker</span><br/>
                      <span>Me</span>
                    </TableCell>
                    <TableCell>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.get }>Get</span><br/>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.get }>Get</span><br/>
                    </TableCell>
                    <TableCell>
                      <span>+ $500</span><br/>
                      <span>+ $500</span><br/>
                      <span>- $100</span><br/>
                      <span>+ $500</span><br/>
                      <span>+ $500</span><br/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Level 3
                    </TableCell>
                    <TableCell className={ classes.playerList }>
                      <span>Eric McBride</span><br/>
                      <span>Aaron Parker</span><br/>
                      <span>Gertrude Cortez</span><br/>
                      <span>Luke Parker</span><br/>
                      <span>Me</span>
                    </TableCell>
                    <TableCell>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.get }>Get</span><br/>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.get }>Get</span><br/>
                    </TableCell>
                    <TableCell>
                      <span>+ $500</span><br/>
                      <span>+ $500</span><br/>
                      <span>- $100</span><br/>
                      <span>+ $500</span><br/>
                      <span>+ $500</span><br/>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Level 4
                    </TableCell>
                    <TableCell className={ classes.playerList }>
                      <span>Eric McBride</span><br/>
                      <span>Aaron Parker</span><br/>
                      <span>Gertrude Cortez</span><br/>
                      <span>Luke Parker</span><br/>
                      <span>Me</span>
                    </TableCell>
                    <TableCell>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.get }>Get</span><br/>
                      <span className={ classes.take }>Take</span><br/>
                      <span className={ classes.get }>Get</span><br/>
                    </TableCell>
                    <TableCell>
                      <span>+ $500</span><br/>
                      <span>+ $500</span><br/>
                      <span>- $100</span><br/>
                      <span>+ $500</span><br/>
                      <span>+ $500</span><br/>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    )
  }
}

export default withStyles( styles )( MoveHistory )

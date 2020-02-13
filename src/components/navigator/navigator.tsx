import { Paper } from '@material-ui/core'
import React from 'react'
import { NavigatorActions, NavigatorRecent } from 'src/components'

export const Navigator = () => (
  <React.Fragment>
    <NavigatorActions />
    <Paper>
      <NavigatorRecent />
    </Paper>
  </React.Fragment>
)

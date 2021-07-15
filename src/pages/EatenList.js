import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Container, Typography } from '@material-ui/core'
// bookmarked as Eaten Recipelist
const EatenList = () => {

  const { eatenList } = useContext(GlobalContext)
  console.log('eatenList:', eatenList)
  return (
    <Container>
      <Typography variant="h4" component="h1">Eaten List</Typography>
    </Container>
  )
}

export default EatenList

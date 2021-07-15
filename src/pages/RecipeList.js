import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Container, Typography, Grid, makeStyles } from '@material-ui/core'
import RecipeCard from '../components/RecipeCard'

const useStyles = makeStyles((theme) => {
  return {
    gridRoot: {
      margin: theme.spacing(1)
    }
  }
})

// bookmarked recipes list
const RecipeList = () => {
  const { recipeList } = useContext(GlobalContext)
  const classes = useStyles()

  return (
    <Container>
      <Typography variant="h4" component="h1">Recipe List</Typography>
      <Grid container >
      {recipeList.length !== 0 && recipeList.map((recipe, idx) => (
        <Grid container item key={idx} direction="column" xs={3} className={ classes.gridRoot}>
          <RecipeCard recipe={recipe}/>
        </Grid>
      ))}
      </Grid>
    </Container>
  )
}

export default RecipeList

import React, { useContext }from 'react'
import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => {
  return {
    cardLink: {
      '& .MuiCardContent-root': {
        color: 'black',
        textDecoration: 'none'
      }
    }
  }
})

const RecipeCard = ({ recipe }) => {

  const { addToRecipeList, addToEatenList, recipeList, eatenList } = useContext(GlobalContext)

  const classes = useStyles()

  // Flags
  let listedRecipe = recipeList.find((item) => item.id === recipe.id)
  let eatenRecipe = eatenList.find((item) => item.id === recipe.id)
  const bookmarkDisabled = listedRecipe ? true : false;
  const eatenDisabled = eatenRecipe ? true : false;

  const { title, image, id} = recipe
  return (
     <Card>
      <CardActionArea>
        <Link to={`/recipe/${id}`}>
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={image}
            title={ title }
          />
          <CardContent className={ classes.cardLink}>
            <Typography gutterBottom variant="h5" component="h2">
              { title }
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        {recipeList.some(item => item === recipe.id) === false ? (
          <Button disabled={ bookmarkDisabled } size="small" color="primary" onClick={() => addToRecipeList(recipe)}>
            <AlarmAddIcon />
            Bookmark
          </Button>
        ) : ("")}
        <Button disabled={eatenDisabled} size="small" color="primary" onClick={ () => addToEatenList(recipe) }>
          <AlarmOnIcon />
          Eaten
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard

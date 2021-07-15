import React, { useContext }from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';
import { GlobalContext } from '../context/GlobalContext'

const RecipeCard = ({ recipe }) => {

  const { addToRecipeList, recipeList, eatenList } = useContext(GlobalContext)

  // Flags
  let listedRecipe = recipeList.find((item) => item.id === recipe.id)
  let eatenRecipe = eatenList.find((item) => item.id === recipe.id)
  const bookmarkDisabled = listedRecipe ? true : false;
  const eatenDisabled = eatenRecipe ? true : false;

  const { title, image, id} = recipe
  return (
     <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          title={ title }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { title }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {recipeList.some(item => item === recipe.id) === false ? (
          <Button disabled={ bookmarkDisabled } size="small" color="primary" onClick={() => addToRecipeList(recipe)}>
            <AlarmAddIcon />
            Bookmark
          </Button>
        ) : ("")}
        <Button disabled={ eatenDisabled } size="small" color="primary">
          <AlarmOnIcon />
          Eaten
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard

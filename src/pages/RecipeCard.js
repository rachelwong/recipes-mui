import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';

const RecipeCard = ({ recipe }) => {
  console.log('RecipeCard:')
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
        <Button size="small" color="primary">
          <AlarmAddIcon />
          Bookmark
        </Button>
        <Button size="small" color="primary">
          <AlarmOnIcon />
          Eaten
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard

import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Grid, Chip, Button, Container, Typography, Paper, makeStyles } from '@material-ui/core'
import axios from 'axios'
import fakeData from '../data/recipe.json'
import LinkIcon from '@material-ui/icons/Link';
import EcoIcon from '@material-ui/icons/Eco';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import StarsIcon from '@material-ui/icons/Stars';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  pillWrap: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(0.5),
    }
  },
  container: {
    marginTop: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(4)
  },
  sourceBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  }
}))


const Details = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({})
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    const fetchRecipeData = async () => {
      // let { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOON_API_KEY}`)
      // setRecipeDetails(data)
      setRecipeDetails(fakeData)
    }
    fetchRecipeData()
  }, [])

  return (
    <Container className={ classes.container}>
      <Paper className={ classes.paper}>
        <Grid container>
          <Grid item xs={6}>
              <img src={recipeDetails.image} alt={recipeDetails.title} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" component="h1">{recipeDetails.title}</Typography>
            <div className={classes.pillWrap}>
              { recipeDetails.vegetarian && <Chip label="vegetarian" color="primary" icon={<EcoIcon /> }/> }
              {recipeDetails.vegan && <Chip label="vegan" color="primary" icon={<EcoIcon />} variant="outlined" />}
              { recipeDetails.glutenFree && <Chip label="Gluten Free" icon={<CheckCircleIcon />} variant="outlined"/> }
              { recipeDetails.cheap ? <Chip label="Cheap" color="primary" icon={<MonetizationOnIcon />} /> : <Chip label="Expensive" color="secondary" icon={<MonetizationOnIcon />} /> }
              {recipeDetails.veryPopular ? <Chip label="Popular" icon={<StarsIcon />} color="secondary" /> : <Chip label="Rare eats" icon={<StarsIcon />} color="primary" />}
              {recipeDetails.sustainable && <Chip label="Sustainable" color="primary" variant="outlined" icon={<EmojiNatureIcon />} />}
              {recipeDetails.veryHealthy ? <Chip label="Healthy" variant="outlined" color="secondary" icon={<FavoriteIcon />} /> : <Chip label="Not healthy" color="primary" variant="outlined" icon={<FavoriteIcon />} />}
              {recipeDetails.dairyFree ? <Chip label="DairyFree" color="primary" icon={<LocalDrinkIcon />} /> : <Chip label="Dairy" color="primary" icon={<LocalDrinkIcon />} />}
            </div>
            <Grid item container>
              <Grid item container xs={6} direction="row" justifyContent="flex-start">
                <Typography variant="h6">Serve {recipeDetails.servings}</Typography>
              </Grid>
              <Grid item container xs={6} direction="row" justifyContent="flex-start">
                <Typography variant="h6">Ready in { recipeDetails.readyInMinutes} minutes</Typography>
              </Grid>
            </Grid>
            <Typography variant="body">
              {recipeDetails.summary }
            </Typography>
            <div className={ classes.sourceBtn}>
              <Button variant="contained" color="secondary" startIcon={<LinkIcon />}>
                <a href={recipeDetails.sourceUrl}>Go to Source</a>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
      {recipeDetails.analyzedInstructions?.steps?.length > 0 && recipeDetails?.analyzedInstructions?.steps?.map((item, idx) => (
        <Paper className={classes.instruction}>
          <Typography variant="h6">
            Step {item.number}
          </Typography>
          <Typography variant="body2">
            {item.step}
          </Typography>
        </Paper>
      ))}
    </Container>
  )
}

export default Details

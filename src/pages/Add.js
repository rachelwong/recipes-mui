import React, { useState} from 'react'
import { Typography, TextField, makeStyles, Container, Grid } from '@material-ui/core'
// import axios from 'axios'
import RecipeCard from '../components/RecipeCard'
import fakeData from '../data/db.json'

// search for recipes to add to RecipeList page
const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: '20px'
    },
    gridRoot: {
      '& .MuiPaper-root': {
        margin: theme.spacing(1)
      }
    }
  }
 })

const Add = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([])
  const [isLoading, setLoading] = useState(false)
  const classes = useStyles();

  const handleInput = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
    setLoading(true)
    const fetchRecipes = async () => {
      // let { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&query=${query}`)
      // setRecipes(data.results)
      setRecipes(fakeData.results)
    }
    fetchRecipes()
    setLoading(false)
  }
  console.log("recipes", recipes.length, recipes)

  return (
    <Container className={ classes.root}>
      <Typography variant="h4">Add recipes to list</Typography>
      <div>
        <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Search Recipes"
          helperText="Enter any keywords"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={query}
          onChange={handleInput}
        />
      </div>
      {isLoading && <Typography variant="h3">Loading recipes...</Typography>}
      <Grid container>
        {recipes.length > 0 &&
          recipes.map((recipe, idx) => (
            <Grid container item key={idx} direction="column" xs={3} className={ classes.gridRoot}>
              <RecipeCard recipe={recipe}/>
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default Add

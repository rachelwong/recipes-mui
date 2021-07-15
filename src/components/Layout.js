import React from 'react'
import { Toolbar, AppBar, Button, Grid, Container, Typography, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      padding: theme.spacing(2)
    },
    appBarButton: {
      '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(1)
      }
    }
  }
})
const Layout = ({ children }) => {
  const history = useHistory()
  const classes = useStyles()
  return (
    <div className="layout">
      <AppBar position="sticky" color="secondary" className={ classes.appBar }>
        <Toolbar>
          <Container>
            <Grid container>
              <Grid item xs={4}>
                <Button className={ classes.appBarButton }color="inherit" aria-label="menu" onClick={ () => history.push("/")}>
                  <FastfoodIcon />
                    <Typography variant="h6">MuiSpoon</Typography>
                </Button>
              </Grid>
              <Grid container item xs={8} direction="row" justifyContent="flex-end">
                <Button className={ classes.appBarButton } color="inherit" onClick={() => history.push("/")}>
                  <ListAltIcon />
                    <Typography variant="h6">
                      Recipes list
                    </Typography>
                  </Button>
                <Button className={ classes.appBarButton } color="inherit" onClick={() => history.push("/add")}>
                  <AddCircleOutlineIcon />
                    <Typography variant="h6">
                      Add Recipes
                    </Typography>
                  </Button>
                <Button className={ classes.appBarButton } color="inherit">
                  <DoneAllIcon />
                    <Typography variant="h6" onClick={ () => history.push("/eaten")}>
                      Eaten Recipes
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Container>
        </Toolbar>
      </AppBar>
      <Container className="page">
        { children }
      </Container>
    </div>
  )
}

export default Layout

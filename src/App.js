import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import RecipeList from './pages/RecipeList'
import EatenList from './pages/EatenList'
import Add from './pages/Add'
import Details from './pages/Details'
import { CssBaseline } from  '@material-ui/core'
import { GlobalProvider } from './context/GlobalContext'
import { useState } from 'react'
import { createTheme, ThemeProvider} from '@material-ui/core'

function App() {

  const [styleTheme, setStyleTheme] = useState({
    palette: {
      type: "light"
    }
  })

  const muiTheme = createTheme(styleTheme)

  const onToggleDark = () => {
    let newPaletteType = styleTheme.palette.type === "light" ? "dark" : "light";
  }
  return (
    <GlobalProvider>
      {/* <ThemeProvider theme={styleTheme}> */}
        <Router>
          <Layout onToggleDark={ onToggleDark }>
            <Switch>
              <Route path="/" exact component={RecipeList} />
              <Route path="/eaten" component={EatenList} />
              <Route path="/add" component={Add} />
              <Route path="/recipe/:id" exact component={ Details } />
            </Switch>
          </Layout>
          <CssBaseline />
        </Router>
      {/* </ThemeProvider> */}
    </GlobalProvider>
  );
}

export default App;

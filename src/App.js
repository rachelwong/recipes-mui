import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import RecipeList from './pages/RecipeList'
import EatenList from './pages/EatenList'
import Add from './pages/Add'
import { CssBaseline } from  '@material-ui/core'
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={RecipeList} />
            <Route path="/eaten" component={EatenList} />
            <Route path="/add" component={ Add } />
          </Switch>
        </Layout>
        <CssBaseline />
      </Router>
    </GlobalProvider>
  );
}

export default App;

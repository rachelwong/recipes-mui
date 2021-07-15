import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import RecipeList from './pages/RecipeList'
import EatenList from './pages/EatenList'
import Add from './pages/Add'
import { CssBaseline } from  '@material-ui/core'

function App() {
  return (
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
  );
}

export default App;

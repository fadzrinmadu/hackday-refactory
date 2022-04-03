import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBookForm from './pages/AddBookForm';
import EditBookForm from './pages/EditBookForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add">
          <AddBookForm />
        </Route>
        <Route exact path="/edit/:id">
          <EditBookForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBookForm from './pages/AddBookForm';
import EditBookForm from './pages/EditBookForm';
import Test from './components/Test';

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
        <Route exact path="/test">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

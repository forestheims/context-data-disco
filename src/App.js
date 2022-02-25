import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Authentication from './views/Authentication/Authentication';
import Composition from './views/Composition/Composition';
import Home from './views/Home/Home';
import Notes from './views/Notes/Notes';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Composition>
        <Switch>
          <Route path="/login">
            <Authentication />
          </Route>
          <PrivateRoute path="/notes">
            <Notes />
          </PrivateRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Composition>
    </BrowserRouter>
  );
}

export default App;

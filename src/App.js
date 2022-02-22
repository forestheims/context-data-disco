import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Authentication from './views/Authentication/Authentication';
import Composition from './views/Composition/Composition';
import Home from './views/Home/Home';
import Notes from './views/Notes/Notes';

function App() {
  return (
    <BrowserRouter>
      <Composition>
        <Switch>
          <Route path="/login">
            <Authentication />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Composition>
    </BrowserRouter>
  );
}

export default App;

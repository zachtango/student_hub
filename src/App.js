import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Controller from './components/controller/controller';
import ClubForm from './components/clubForm/clubForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/clubEvents'>Add a club event to Alexa</Link>
            </li>
            <li>
              <Link to='/availability'>Room Availability</Link>
            </li>
            
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path='/availability'>
          <Controller 
              room="Kitchenette"
            />
          <Controller
            room="TV Room"
          />
          <Controller
            room="Buley"
          />
        </Route>
        <Route path='/clubEvents'>
        <ClubForm />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

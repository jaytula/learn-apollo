import React from 'react';
import classes from './App.module.css';

import { Link, Route, Switch } from 'react-router-dom';
import Rates from './components/Rates/Rates';
import Dogs from './components/Dogs/Dogs';

function App() {
  return (
    <div>
      <div className={classes.Links}>
        <Link to='/rates'>Rates</Link>
        <Link to='/dogs'>Dogs</Link>
      </div>
      <Switch>
        <Route path='/rates' component={Rates} />
        <Route path='/dogs' component={Dogs} />

      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import classes from './App.module.css';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link, Route, Switch } from 'react-router-dom';
import Rates from './components/Rates/Rates';

function App() {
  return (
    <div>
      <div className={classes.Links}>
        <Link to='/rates'>Rates</Link>
        <Link to='/dogs'>Dogs</Link>
      </div>
      <Switch>
        <Route path='/rates' component={Rates} />
      </Switch>
    </div>
  );
}

export default App;

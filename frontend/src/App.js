import React from 'react';
import classes from './App.module.css';

import { Link, Route, Switch } from 'react-router-dom';
import Rates from './components/Rates/Rates';
import Dogs from './components/Dogs/Dogs';
import DogPhoto from './components/DogPhoto/DogPhoto';
import DelayedQuery from './components/DelayedQuery/DelayedQuery';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div>
      <div className={classes.Links}>
        <Link to='/rates'>Rates</Link>
        <Link to='/dogs'>Dogs</Link>
        <Link to="/delayed-query">Delayed Query</Link>
        <Link to="/todos">Todos</Link>
      </div>
      <Switch>
        <Route path='/rates' component={Rates} />
        <Route path="/dog-photo/:breed" component={DogPhoto} />
        <Route path='/dogs' component={Dogs} />
        <Route path='/delayed-query' component={DelayedQuery} />
        <Route path='/todos' component={Todos} />
      </Switch>
    </div>
  );
}

export default App;

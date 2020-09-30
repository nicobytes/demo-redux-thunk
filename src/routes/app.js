import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../containers/home';
import Todos from '../containers/todos';
import Layout from '../containers/layout';

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;

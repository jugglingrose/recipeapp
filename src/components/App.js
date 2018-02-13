import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from './Nav';
import Footer from './Footer';
import Landing from './Landing';
import Login from './Login';
import Add from './Add';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/add" component={Add} />
        </Switch>


        <Footer />

      </div>

    );
  }
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from './Nav';
import Footer from './Footer';
import Landing from './Landing';
import Login from './Login';
import Add from './Add';


class App extends React.Component {
  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    //get initial state//
    this.state = {
      recipes: {}
    }
  }

  addRecipe(recipe){
    //update our state
    //make a copy of our state first//
    const recipes = {...this.state.recipes};
    //add in our new fish
    const timestamp = Date.now();
    recipes[`recipe-${timestamp}`] = recipe;
    //set state
    this.setState({recipes: recipes});
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/add" render={(props) => (<Add {...props} addRecipe={this.addRecipe} />)}/> />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

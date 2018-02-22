import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Nav from './Nav';
import Footer from './Footer';
import Landing from './Landing';
import Add from './Add';
import FullRecipe from './FullRecipe';
import Edit from './Edit';


class App extends React.Component {
  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    //get initial state//
    this.state = {
      recipes: {
      recipe1: {
        title: 'Pacific Halibut',
        time: 17,
        description: 'the best halibut ever',
        ingredient: ['halibut', "oil", "salt", "pepper", "kale"],
        instruction: ['preheat oven at 350', 'sprinkle seasonings on fish', 'place foil on baking sheet', 'bake for 17 minutes']
      },
      recipe2: {
        title: 'Cookies',
        time: 12,
        description: 'yummy cookies',
        ingredient: ['cookie dough', 'chocolate chips', 'flour', 'butter', 'sugar'],
        instruction: ['preheat oven at 350', 'mix ingreients together in a bowl',
                      'place a teaspoon of dough on a baking sheet one inch apart', 'bake for 12 minutes']
      }
    }}
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

  /* This a test*/
  updateRecipe(event){
    console.log("event called");

  }


  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" render={(props) => (<Landing {...props} recipes={this.state.recipes} />)}/>/>
          <Route path="/add" render={(props) => (<Add {...props} addRecipe={this.addRecipe} />)}/> />
          <Route path="/full/:id" render={(props) => (<FullRecipe {...props} recipes={this.state.recipes} />)}/>/>
          <Route path="/edit/:id" render={(props) => (<Edit {...props} update={this.update} recipes={this.state.recipes} />)}/>/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

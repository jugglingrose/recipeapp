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
    this.titleChange = this.titleChange.bind(this);
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

  titleChange = (id) => (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    const recipes = {...this.state.recipes};
    console.log(id, target, name, value);
    const updateRecipe = Object.keys(recipes).map((recipe, sidx) => {
      console.log(recipe);
      if (id !== sidx) return recipe;
      return { ...recipe, name: value};
    });
    console.log(updateRecipe);
    this.setState({ recipes: updateRecipe});
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" render={(props) => (<Landing {...props} recipes={this.state.recipes} />)}/>/>
          <Route path="/add" render={(props) => (<Add {...props} addRecipe={this.addRecipe} />)}/> />
          <Route path="/full/:id" render={(props) => (<FullRecipe {...props} recipes={this.state.recipes} />)}/>/>
          <Route path="/edit/:id" render={(props) => (<Edit {...props} titleChange={this.titleChange} recipes={this.state.recipes} />)}/>/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

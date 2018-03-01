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
    this.timeChange = this.timeChange.bind(this);
    this.ingChange = this.ingChange.bind(this);
    this.instructionChange = this.instructionChange.bind(this);

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
    }};
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
    console.log("title change called");

    const value = e.target.value;
    const recipes = {...this.state.recipes};
    recipes[id].title = value;
    console.log(recipes);
    this.setState({ recipes: recipes});
  }

  timeChange = (id) => (e) => {
    console.log("time change called");
    const value = e.target.value;
    const recipes = {...this.state.recipes};
    recipes[id].time = value;
    console.log(recipes);

    this.setState({ recipes: recipes});
  }

  descChange = (id) => (e) => {
    console.log("desc change called");
    const value = e.target.value;
    const recipes = {...this.state.recipes};
    recipes[id].description = value;
    this.setState({ recipes: recipes});
  }

  ingChange = (recipeId, ingId) => (e) => {
    const recipes = {...this.state.recipes};
    recipes[recipeId].ingredient[ingId] = e.target.value;
    this.setState({ recipes: recipes});
  }

  instructionChange = (recipeId, instructionId) => (e) => {
    console.log("instruction change called");
    const recipes = {...this.state.recipes};
    recipes[recipeId].instruction[instructionId] = e.target.value;
    this.setState({ recipes: recipes});
    console.log(recipes);
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" render={(props) => (<Landing {...props} recipes={this.state.recipes} />)}/>/>
          <Route path="/add" render={(props) => (<Add {...props} addRecipe={this.addRecipe} />)}/> />
          <Route path="/full/:id" render={(props) => (<FullRecipe {...props} recipes={this.state.recipes} />)}/>/>
          <Route path="/edit/:id" render={(props) => (<Edit {...props} instructionChange={this.instructionChange} ingChange={this.ingChange} descChange={this.descChange} timeChange={this.timeChange} titleChange={this.titleChange} recipes={this.state.recipes} />)}/>/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

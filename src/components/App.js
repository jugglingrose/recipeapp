import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Nav from './Nav';
import Footer from './Footer';
import Landing from './Landing';
import Add from './Add';
import FullRecipe from './FullRecipe';
import Edit from './Edit';
import NotFound from './NotFound';
import Ingredient from './Ingredient';


class App extends React.Component {
  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    /*this.titleChange = this.titleChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.ingChange = this.ingChange.bind(this);
    this.instructionChange = this.instructionChange.bind(this);
    this.delIngredient = this.delIngredient.bind(this);
    this.delInstruction = this.delInstruction.bind(this);*/
    this.loadRecipes = this.loadRecipes.bind(this);

    //initialize state//
    this.state={
      cur_recipe:{},
      recipes:{}
    }
  }

    /* This function gets called once the constructor is done.*/
    componentDidMount() {
      this.loadRecipes();
    }

    /* This function is responsible for getting our recipes from our backend*/
    loadRecipes() {
      console.log("loading recipes...");
      fetch("http://localhost:4000/recipes")
      .then(data => data.json())
      .then(data => {
        console.log("recipes have been fetched", data);
        const recipes = {...this.state.recipes};
        this.setState({recipes: data});
        console.log("state:" + this.state.recipes[0].title);
      });
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

/*
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
    console.log("ingredient change called");
    const recipes = {...this.state.recipes};
    recipes[recipeId].ingredient[ingId] = e.target.value;
    this.setState({ recipes: recipes});
  }

  delIngredient = (recipeId, ingId) => (e) => {
    e.preventDefault();
    console.log("delete ingredient called");
    const recipes = {...this.state.recipes};
    recipes[recipeId].ingredient.splice(ingId, 1);
    this.setState({ recipes: recipes});
    console.log(recipes);
  }

  instructionChange = (recipeId, instructionId) => (e) => {
    console.log("instruction change called");
    const recipes = {...this.state.recipes};
    recipes[recipeId].instruction[instructionId] = e.target.value;
    this.setState({ recipes: recipes});
    console.log(recipes);
  }

  delInstruction = (recipeId, instructionId) => (e) => {
    e.preventDefault();
    console.log("delete instruction called");
    const recipes = {...this.state.recipes};
    recipes[recipeId].instruction.splice(instructionId, 1);
    this.setState({recipes: recipes});
    console.log(recipes);
  }
  */

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" render={(props) => (<Landing {...props} recipes={this.state.recipes} />)}/>/>
          <Route path="/add" render={(props) => (<Add {...props} addRecipe={this.addRecipe} />)}/> />
          <Route path="/full/:id" render={(props) => (<FullRecipe {...props} recipes={this.state.recipes} />)}/>/>
          <Route path="/edit/:id" render={(props) => (<Edit {...props} delIngredient={this.delIngredient}
            instructionChange={this.instructionChange} delInstruction={this.delInstruction} ingChange={this.ingChange}
            descChange={this.descChange} timeChange={this.timeChange}
            titleChange={this.titleChange} recipes={this.state.recipes}
          /> )}/>/>
          <Route render={(props) => (<NotFound />)} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

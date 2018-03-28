import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Nav from './Nav';
import Footer from './Footer';
import Landing from './Landing';
import FullRecipe from './FullRecipe';
import Edit from './Edit';
import NotFound from './NotFound';



class App extends React.Component {
  constructor() {
    super();

    this.simpleChange = this.simpleChange.bind(this);
    this.arrayChange = this.arrayChange.bind(this);
    this.delChange = this.delChange.bind(this);
    this.loadRecipes = this.loadRecipes.bind(this);
    this.loadRecipe = this.loadRecipe.bind(this);
    this.createBlank = this.createBlank.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.appendInput = this.appendInput.bind(this);
    this.addRecipe = this.addRecipe.bind(this);

    //initialize state//
    this.state={
      cur_recipe:{},
      recipes:{}
    }
  }

  //call to clear the state.  Also, so when full recipe loads it will be blank
  //until the data fills in.  Otherwsie, Full Recipe won't work as the async call
  //comes in as undefined when render loads.
  createBlank(){
    console.log("blank recipe called");
    const blank = {
      title: '',
      time: 0,
      desc: '',
      ingredient: [ " "],
      instruction: [ " "]
    }
    this.setState({cur_recipe: blank});
  }

  addRecipe(data){
    console.log("add recipe called" + data);
    fetch("http://localhost:4000/recipe", {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log("new recipe has been added successfully", res)
    });
  }

  updateRecipe(id, data) {
    console.log("update recipe is being called");
    fetch("http://localhost:4000/recipe/" + id, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .then(res => {
      console.log("recipe has been updated", res)
    });
  }

  loadRecipe(id) {
    console.log("loading a single recipe...");
    fetch("http://localhost:4000/recipe/" + id)
    .then(data => data.json())
    .then(data => {
      console.log("recipe has been fetched", data.title);
      this.setState({cur_recipe: data});
    });
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


  /*addRecipe(recipe){
    //update our state
    //make a copy of our state first//
    const recipes = {...this.state.recipes};
    //add in our new fish
    const timestamp = Date.now();
    recipes[`recipe-${timestamp}`] = recipe;
    //set state
    this.setState({recipes: recipes});
  }*/

  simpleChange = (fieldName) => (e) => {
    console.log("title change called");
    const value = e.target.value;
    const cur_recipe = {...this.state.cur_recipe};
    cur_recipe[fieldName] = value;
    console.log(cur_recipe);
    this.setState({ cur_recipe : cur_recipe});
    }

  arrayChange = (fieldName, index) => (e) => {
    console.log("array change called");
    const cur_recipe = {...this.state.cur_recipe};
    cur_recipe[fieldName][index] = e.target.value;
    this.setState( {cur_recipe : cur_recipe});
  }

  delChange = (fieldName, index) => (e) => {
    e.preventDefault();
    console.log("delete change called");
    const cur_recipe = {...this.state.cur_recipe};
    console.log('field name:' + fieldName);
    console.log('index:' + index);
    cur_recipe[fieldName].splice(index, 1);
    this.setState({ cur_recipe : cur_recipe});

  }

  appendInput(){
    console.log("append input called")
    const cur_recipe = {...this.state.cur_recipe};
    var newIngInput = [""];
    const ingInputs = cur_recipe.ingredient.concat(newIngInput);
    cur_recipe.ingredient = ingInputs;
    this.setState({ cur_recipe : cur_recipe});
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" render={(props) => (<Landing {...props} loadRecipes = {this.loadRecipes} recipes={this.state.recipes} />)}/>/>
          <Route path="/full/:id" render={(props) => (<FullRecipe {...props} createBlank={this.createBlank} loadRecipe={this.loadRecipe} cur_recipe={this.state.cur_recipe} />)}/>/>
          <Route path="/edit/:id" render={(props) => (<Edit {...props} delChange={this.delChange}
            simpleChange={this.simpleChange} arrayChange={this.arrayChange}
            loadRecipe={this.loadRecipe} createBlank={this.createBlank}
            cur_recipe={this.state.cur_recipe} updateRecipe={this.updateRecipe}
            appendInput={this.appendInput} addRecipe={this.addRecipe}
          /> )}/>/>
          <Route path="/add" render={(props) => (<Edit {...props} delChange={this.delChange}
            simpleChange={this.simpleChange} arrayChange={this.arrayChange}
            loadRecipe={this.loadRecipe} createBlank={this.createBlank}
            cur_recipe={this.state.cur_recipe} updateRecipe={this.updateRecipe}
            appendInput={this.appendInput} addRecipe={this.addRecipe}
          /> )}/>/>
          <Route render={(props) => (<NotFound />)} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

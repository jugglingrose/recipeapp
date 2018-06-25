import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';
import Landing from './Landing';
import FullRecipe from './FullRecipe';
import Edit from './Edit';
import NotFound from './NotFound';
import Login from './Login';
import EnsureLoggedIn from './EnsureLoggedIn';


var recipesUrl = "http://localhost:4000/recipes/";
var recipeUrl = "http://localhost:4000/recipe/";
var loginUrl = "http://localhost:4000/login/";
var signupUrl = "http://localhost:4000/signup";
var logoutUrl = "http://localhost:4000/logout";


class App extends React.Component {
  constructor() {
    super();
    //bind methods//ß
    this.simpleChange = this.simpleChange.bind(this);
    this.arrayChange = this.arrayChange.bind(this);
    this.delChange = this.delChange.bind(this);
    this.loadRecipes = this.loadRecipes.bind(this);
    this.loadRecipe = this.loadRecipe.bind(this);
    this.createBlank = this.createBlank.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.appendInput = this.appendInput.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.delRecipe = this.delRecipe.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logOut = this.logOut.bind(this);

    //initialize state//
    this.state={
      cur_recipe:{},
      recipes:{},
      authed: false,
    }
  }

  componentDidMount(){
    fetch(loginUrl, {
      credentials: 'include',
    })
    .then(data => data.json())
    .then(data => {
      console.log("authed", data);
      const authed = {...this.state.authed};
      this.setState({authed: data});
      console.log("componentDidMount");
      console.log("authed:" + this.state.authed);
    });
  }

  //var recipesUrl = "https://us-central1-recipe-cg.cloudfunctions.net/api_v1/recipes";
  //var recipeUrl = "https://us-central1-recipe-cg.cloudfunctions.net/api_v1/recipe/";



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

  delRecipe(id){
    console.log("delete recipe called");
    fetch( recipeUrl + id, {
      credentials: 'include',
      method: 'DELETE',
    })
    /*after delete, we call createBlank to clear the form*/
    this.createBlank();
  }

  addRecipe(data, callback){
    console.log("add recipe called" + data);
    fetch(recipeUrl, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log("new recipe has been added successfully", res);
      /*we use the callback to access push history inside of our edit component.
      We do not have access to our history.push inside the app itself because
      it isn't part of the routing*/
      callback();
    });
  }

  updateRecipe(id, data, callback) {
    console.log("update recipe is being called");
    fetch( recipeUrl + id, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .then(res => {
      console.log("recipe has been updated", res)
      callback();
    });
  }

  loadRecipe(id) {
    console.log("loading a single recipe...");
    fetch( recipeUrl + id, {
      credentials: 'include',
    })
    .then(data => data.json())
    .then(data => {
      console.log("recipe has been fetched", data.title);
      this.setState({cur_recipe: data});
    });
  }

    /* This function is responsible for getting our recipes from our backend*/
    loadRecipes() {
      console.log("loading recipes...");
      fetch( recipesUrl, {
        credentials: 'include',
      })
      .then(data => data.json())
      .then(data => {
        console.log("recipes have been fetched", data);
        const recipes = {...this.state.recipes};
        this.setState({recipes: data});
        console.log("state:" + this.state.recipes[0].title);
      });
    }

  //Make changes to the input fields of title, time, and desc//
  simpleChange = (fieldName) => (e) => {
    console.log("title change called");
    const value = e.target.value;
    const cur_recipe = {...this.state.cur_recipe};
    cur_recipe[fieldName] = value;
    console.log(cur_recipe);
    this.setState({ cur_recipe : cur_recipe});
    }

  //make change to the input fields of ingredient and instruction
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

  /*Onclick calls appendInput to add an additional input field.*/
  appendInput(fieldName){
    console.log("append input called")
    const cur_recipe = {...this.state.cur_recipe};
    var newIngInput = [""];
    const ingInputs = cur_recipe[fieldName].concat(newIngInput);
    cur_recipe[fieldName] = ingInputs;
    this.setState({ cur_recipe : cur_recipe});
  }

  /* ------- Log In Methods ----------------*/
  //call backend API to add a new user from the sign up form on Login.JS//
  addNewUser(data, callback){
    console.log("add new user called" + data);
    fetch(signupUrl, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log("new user has been added successfully", res);
      /*we use the callback to access push history inside of our edit component.
      We do not have access to our history.push inside the app itself because
      it isn't part of the routing*/
      callback();
    });
  }

  loginUser(data, callback) {
    console.log("loginUser called");
    fetch( loginUrl, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .then(res => {
      console.log("logged in", res)
      const authed = {...this.state.authed};
      this.setState({authed: res});
      console.log("authed:" + this.state.authed);
      /*callback();*/
    });
  }

  logOut() {
    console.log("logout user called");
    fetch(logoutUrl, {
      credentials: 'include',
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      const authed = {...this.state.authed};
      this.setState({authed: res});
      console.log("authed:" + this.state.authed);
    });
  }
  //render our different routes//
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" render={(props) => (<Landing {...props} loadRecipes = {this.loadRecipes} recipes={this.state.recipes} />)}/>/>
          <Route path="/login" render={(props) => (<Login {...props} addNewUser={this.addNewUser} loginUser={this.loginUser} />)} />
          <Route path="/full/:id" render={(props) => (<FullRecipe {...props} createBlank={this.createBlank} loadRecipe={this.loadRecipe} cur_recipe={this.state.cur_recipe} />)}/>/>
          {/*//wrap routes that require authentication in a component//*/}
          {/*}<Route component={EnsureLoggedIn} authed={this.state.authed} > */}
          <EnsureLoggedIn authed={this.state.authed}>
            <Route path="/edit/:id" render={(props) => (<Edit {...props} delChange={this.delChange}
              simpleChange={this.simpleChange} arrayChange={this.arrayChange}
              loadRecipe={this.loadRecipe} createBlank={this.createBlank}
              cur_recipe={this.state.cur_recipe} updateRecipe={this.updateRecipe}
              appendInput={this.appendInput} addRecipe={this.addRecipe}
              delRecipe={this.delRecipe}
            /> )} />
            <Route path="/add" render={(props) => (<Edit {...props} delChange={this.delChange}
              simpleChange={this.simpleChange} arrayChange={this.arrayChange}
              loadRecipe={this.loadRecipe} createBlank={this.createBlank}
              cur_recipe={this.state.cur_recipe} updateRecipe={this.updateRecipe}
              appendInput={this.appendInput} addRecipe={this.addRecipe}
            /> )} />
          </EnsureLoggedIn>
          <Route render={(props) => (<NotFound />)} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

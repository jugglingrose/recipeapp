import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Ingredient from './Ingredient';
import Instruction from './Instruction';


class Edit extends React.Component{
  constructor(){
    super();
    this.getRecipe = this.getRecipe.bind(this);
    this.state={
      recipe: {}
    };
  }

  componentDidMount(){
    console.log("component did mount!");
    var id = (this.props.match.params.id);
    var recipe = this.props.recipes[id];
    console.log("this is the recipe:" + recipe.title);

    if(recipe === undefined){
      console.log("edit page: recipe is undefined");
      this.setState();
    }
      else{
        console.log("edit page: recipe is defined");
        this.getRecipe(recipe._id);
      }
    }

  getRecipe(id){
    console.log("getting one recipe");
    console.log("id:" + id);
    fetch("http://localhost:4000/recipe/" + id)
    .then(data => data.json())
    .then(data => {
      console.log("matching recipe has been fetched", data);
      /*const recipes = {...this.state.recipes};*/
      this.setState({recipe: data});
      console.log("state:" + this.state.recipe.time);
    });
  }

  render(){

    var id = (this.props.match.params.id);
    return(
      <div id="add-recipe-page">
        <div className="content">
          <Container fluid={true}>
            <form ref={(input) => this.form = input}>
            <Row>
              <Col xs="12" lg={{ size: 6, offset: 3}}>
                <div className="img-upload">
                  <i className="fa fa-camera"></i>
                  <p>upload image</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg={{ size: 6, offset: 3}}>
                <div className="add-form-group">
                  <input type="text"
                    className="add-input" name="title" value={this.state.recipe.title} onChange={this.props.titleChange(id)}></input>
                  <input type="text"
                    className="add-input" name="time"  value={this.state.recipe.time} onChange={this.props.timeChange(id)}></input>
                  <textarea className="desc-input"
                    name="description" rows="4" columns="10"  value={this.state.recipe.desc} onChange={this.props.descChange(id)}></textarea>
                  <div className="ing-form">
                    {
                      this.state.recipe.ingredient.map((ingredient, idx) =>
                      <Ingredient key={idx} ingId={idx} recipeId={id} delIngredient={this.props.delIngredient} ingChange={this.props.ingChange} ing={ingredient}/>)
                    }
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg={{ size: 6, offset: 3}}>
                  <div className="text-center">
                    <button onClick={this.props.appendInput} className="add-btn" type="button">ADD</button>
                  </div>
              </Col>
            </Row>

            {
              this.props.recipes[id].instruction.map((instruction, idx) =>
              <Instruction key={idx} recipeId={id} instructionId={idx} instruction={instruction} delInstruction={this.props.delInstruction} instructionChange={this.props.instructionChange} />)
            }

            <Row>
              <Col xs="12" lg={{ size: 6, offset: 3}}>
                <div className="text-center">
                  <button className="add-btn" type="button">ADD</button>
                </div>
                <div class="text-center">
                  <button type="button" className="add-btn" onClick={this.updateRecipe} > SAVE</button>
                  <button className="add-btn" type="button">DELETE</button>
                </div>
              </Col>
            </Row>
          </form>
          </Container>
        </div>
      </div>

    );
  }
}

export default Edit;

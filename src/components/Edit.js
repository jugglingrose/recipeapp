import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Ingredient from './Ingredient';
import Instruction from './Instruction';


class Edit extends React.Component{
  constructor() {
    super();
    this.addEdit = this.addEdit.bind(this);
  }

  componentWillMount() {
    console.log("Edit Create Blank called");
    this.props.createBlank();
  }

  componentDidMount(){
    console.log("component did mount!");
    //call the load recipe to get our current location in return//
    var id = (this.props.match.params.id);
    /*this.props.loadRecipe(id);*/
    console.log("NIGHT: id=", id);

    if(id === undefined){
      console.log("edit page: recipe is undefined");
      this.props.createBlank();
    }
    else{
        console.log("edit page: recipe is defined");
        this.props.loadRecipe(id);
      }
    }

    addEdit(id, recipe){
      console.log("add/edit called");
      /*updateRecipe(this.props.cur_recipe._id, this.props.cur_recipe)}*/
      if(id === undefined){
        console.log("add is undefined" + recipe.title);
        this.props.addRecipe(recipe);
      }
      else{
        this.props.updateRecipe(id, recipe);
      }
    }

  render(){

    /*var id = (this.props.match.params.id);*/
    var ingredients = this.props.cur_recipe.ingredient || [];
    var instructions = this.props.cur_recipe.instruction || [];
    var cur_id = this.props.cur_recipe._id || " ";
    console.log("Edit. This is current id:" + this.props.cur_recipe._id);

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
                    className="add-input" name="title" value={this.props.cur_recipe.title} onChange={this.props.simpleChange('title')}></input>
                  <input type="text"
                    className="add-input" name="time"  value={this.props.cur_recipe.time} onChange={this.props.simpleChange('time')}></input>
                  <textarea className="desc-input"
                    name="description" rows="4" columns="10"  value={this.props.cur_recipe.desc} onChange={this.props.simpleChange('desc')}></textarea>
                  <div className="ing-form">
                    {
                      ingredients.map((ingredient, idx) =>
                      <Ingredient key={idx} ingId={idx} recipeId={cur_id} delChange={this.props.delChange} arrayChange={this.props.arrayChange} ing={ingredient}/>)
                    }
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg={{ size: 6, offset: 3}}>
                  <div className="text-center">
                    <button onClick={() => this.props.appendInput()} className="add-btn" type="button">ADD</button>
                  </div>
              </Col>
            </Row>

            {
              instructions.map((instruction, idx) =>
              <Instruction key={idx} recipeId={cur_id} instructionId={idx} instruction={instruction} delChange={this.props.delChange} arrayChange={this.props.arrayChange} />)
            }

            <Row>
              <Col xs="12" lg={{ size: 6, offset: 3}}>
                <div className="text-center">
                  <button className="add-btn" type="button">ADD</button>
                </div>
                <div className="text-center">
                  <button type="button" className="add-btn" onClick={() => {this.addEdit(this.props.cur_recipe._id, this.props.cur_recipe)}} > SAVE</button>
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

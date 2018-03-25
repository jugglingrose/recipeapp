import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Ingredient from './Ingredient';
import Instruction from './Instruction';


class Edit extends React.Component{

  componentWillMount() {
    console.log("Edit Create Blank called");
    this.props.createBlank();
  }

  componentDidMount(){
    console.log("component did mount!");
    //call the load recipe to get our current location in return//
    var id = (this.props.match.params.id);
    this.props.loadRecipe(id);

    /*
    if(recipe === undefined){
      console.log("edit page: recipe is undefined");
      this.setState();
    }
      else{
        console.log("edit page: recipe is defined");
        this.getRecipe(recipe._id);
      }*/
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
                    className="add-input" name="title" value={this.props.cur_recipe.title} /*onChange={this.props.titleChange(id)}*/></input>
                  <input type="text"
                    className="add-input" name="time"  value={this.props.cur_recipe.time} /*onChange={this.props.timeChange(id)}*/></input>
                  <textarea className="desc-input"
                    name="description" rows="4" columns="10"  value={this.props.cur_recipe.desc} /*onChange={this.props.descChange(id)}*/></textarea>
                  <div className="ing-form">
                    {
                      ingredients.map((ingredient, idx) =>
                      <Ingredient key={idx} ingId={idx} recipeId={cur_id} delIngredient={this.props.delIngredient} ingChange={this.props.ingChange} ing={ingredient}/>)
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
              instructions.map((instruction, idx) =>
              <Instruction key={idx} recipeId={cur_id} instructionId={idx} instruction={instruction} delInstruction={this.props.delInstruction} instructionChange={this.props.instructionChange} />)
            }

            <Row>
              <Col xs="12" lg={{ size: 6, offset: 3}}>
                <div className="text-center">
                  <button className="add-btn" type="button">ADD</button>
                </div>
                <div className="text-center">
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

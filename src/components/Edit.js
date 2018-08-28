import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Ingredient from './Ingredient';
import Instruction from './Instruction';
import PropTypes from 'prop-types';



class Edit extends React.Component{
  constructor() {
    super();
    this.addEdit = this.addEdit.bind(this);
  }

  //we create a blank recipe otherwsie we have errors loading the page//
  componentWillMount() {
    console.log("Edit Create Blank called");
    this.props.createBlank();
  }

  componentDidMount(){
    console.log("component did mount!");
    var id = (this.props.match.params.id);

    if(id === undefined){
      console.log("edit page: recipe is undefined");
      /*we create blank recipe to load an empty form so user can then create a
      new recipe*/
      this.props.createBlank();
    }
    else{
        console.log("edit page: recipe is defined");
        this.props.loadRecipe(id);
      }
    }

    /*Save button onClick triggers the addEdit Function.  This function tests to
    see wether the form should call the updateRecipe function or the addRecipe
    function based on wether or not there is an id.  This allows us to use just one
    component to handle both the Add and Edit of our app. */
    addEdit(id, recipe){
      console.log("add/edit called");
      if(id === undefined){
        this.props.addRecipe(recipe, () => {
          this.props.history.push('/');
        });

      }
      else{
        this.props.updateRecipe(id, recipe, () => {
          /*pass function to redirect page after submtting*/
          console.log("udpate recipe:" + id);
          this.props.history.push(`/full/${id}`);
        });
      }
    }

  render(){

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
                    className="add-input" name="title" placeholder="Title" value={this.props.cur_recipe.title} onChange={this.props.simpleChange('title')}></input>
                  <input type="text"
                    className="add-input" name="time" placeholder="Time" value={this.props.cur_recipe.time} onChange={this.props.simpleChange('time')}></input>
                  <textarea className="desc-input"
                    name="description" rows="4" columns="10" placeholder="Description" value={this.props.cur_recipe.desc} onChange={this.props.simpleChange('desc')}></textarea>
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
                    <button onClick={() => this.props.appendInput('ingredient')} className="add-btn" type="button">ADD</button>
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
                  <button onClick={() => this.props.appendInput('instruction')} className="add-btn" type="button">ADD</button>
                </div>
                <div className="text-center">
                  <button type="button" className="add-btn" onClick={() => {this.addEdit(this.props.cur_recipe._id, this.props.cur_recipe)}} > SAVE</button>
                  <button className="add-btn" onClick={ () => this.props.delRecipe(this.props.cur_recipe._id)} type="button">DELETE</button>
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

Edit.propTypes = {
  addRecipe: PropTypes.func,
  updateRecipe: PropTypes.func,
  createBlank: PropTypes.func,
  loadRecipe: PropTypes.func,
  cur_recipe: PropTypes.object,
  simpleChange: PropTypes.func,
  delChange: PropTypes.func,
  appendInput: PropTypes.func

};


export default Edit;

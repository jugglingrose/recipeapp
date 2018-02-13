import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Ingredient from './Ingredient';

class Add extends React.Component{
  constructor(){
	   super();
	    this.createRecipe = this.createRecipe.bind(this);
      this.state = {
        title: '',
        ingredients: [{ name: '' }],
      };

    }

  createRecipe(){
    console.log('creating new recipe');
    /*const recipe = {
      title: this.title.value,
      time:  this.time.value,
      ingredient:  this.ingredient.value,
      instruction: this.instruction.value,
    }*/
  
  }

  render(){
    return(
      <div id="add-recipe-page">
        <div className="content">
          <Container fluid={true}>
            <form>
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
                  <input type="text" ref={(input) => { this.title = input }} className="add-input" name="recipe-title" placeholder="Recipe Title"></input>
                  <input type="text" ref={(input) => { this.time = input }} className="add-input" name="cook-time" placeholder="Total Cook Time"></input>
                  <textarea className="desc-input" name="description" rows="4" columns="10" placeholder="Recipe Description"></textarea>
                  <div className="ing-form">
                    <div className="ing-input">
                      <input type="text" ref={(input) => { this.ingredient = input }} name="ingredient" placeholder="Ingredient"></input>
                      <div className="input-group-button ing-btn">
                        <button className="delete-btn">
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="ing-input">
                      <input type="text" ref={(input) => { this.ingredient = input }} name="ingredient" placeholder="Ingredient"></input>
                      <div className="input-group-button ing-btn">
                        <button className="delete-btn">
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="ing-input">
                      <input type="text" ref={(input) => { this.ingredient = input }} name="ingredient" placeholder="Ingredient"></input>
                      <div className="input-group-button ing-btn">
                        <button className="delete-btn">
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg={{ size: 6, offset: 3}}>
                  <div className="text-center">
                    <button className="add-btn" type="button">ADD</button>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg={{ size: 6, offset: 3}}>
                <div className="inst-grp">
                  <textarea type="text" ref={(input) => { this.instruction = input }} name="instruction" className="instruction" rows="4" columns="10" placeholder="Recipe Instruction"></textarea>
                  <div className="instruct-btn-grp">
                    <div className="input-group-button">
                      <button className="drag-button">
                        <i className="fa fa-arrows-v"></i>
                      </button>
                    </div>
                    <div className="input-group-button del">
                      <button className="del">
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="add-btn" type="button">ADD</button>
                </div>
                <div class="text-center">
                  <button className="add-btn" type="button" onClick={this.createRecipe}>SAVE</button>
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

export default Add;

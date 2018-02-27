import React from 'react';
import {Container, Row, Col} from 'reactstrap';


class Edit extends React.Component{
  constructor(){
	   super();

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
                    className="add-input" name="title" value={this.props.recipes[id].title} onChange={this.props.titleChange(id)}></input>
                  <input type="text"
                    className="add-input" name="time"  value={this.props.recipes[id].time} onChange={(e) => this.handleChange(e)}></input>
                  <textarea className="desc-input"
                    name="description" rows="4" columns="10"  value={this.props.recipes[id].description}></textarea>

                  <div className="ing-form">
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

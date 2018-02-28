import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Ingredient from './Ingredient';



class Edit extends React.Component{

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
                    className="add-input" name="time"  value={this.props.recipes[id].time} onChange={this.props.timeChange(id)}></input>
                  <textarea className="desc-input"
                    name="description" rows="4" columns="10"  value={this.props.recipes[id].description} onChange={this.props.descChange(id)}></textarea>
                  <div className="ing-form">
                    {
                      this.props.recipes[id].ingredient.map((ingredient, idx) => <Ingredient key={idx} ingId={idx} ingChange={this.props.ingChange()} ing={ingredient}/>)
                    }
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

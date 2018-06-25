import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class FullRecipe extends React.Component {

  componentWillMount() {
    console.log("JANITHA componentWillMount of FullRecipe");
    this.props.createBlank();
  }

  componentDidMount() {
    this.props.loadRecipe(this.props.match.params.id);
  }

  render(){
    console.log("JANITHA render of FullRecipe");

    var id = this.props.cur_recipe._id;
    console.log("cur_recipe is:" + this.props.cur_recipe);

    //If undefined set to blank array
    var ingredients = this.props.cur_recipe.ingredient || [];
    var instructions = this.props.cur_recipe.instruction || [];
    console.log("ingredients:", ingredients);
    console.log("instructions:", instructions);


    return(
      <div id="synopsis-page">
        <div className="content">
      <Container fluid={true}>
        <Row>
          <Col xs="12" md={{ size: 10, offset: 1}} lg={{ size: 6, offset: 3}} className="recipe-img">
                <img src={require('../assets/img/food_blur.jpg')} alt="food"/>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{size: 10, offset: 1}} lg={{size: 6, offset: 3}} className="text-center synopsis">
            <div className="summary-title">
              <h2>{this.props.cur_recipe.title}</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md={{size: 10, offset: 1}} lg={{size: 6, offset: 3}} className="text-center">
            <Link to={"/edit/" + id}><button type="button" className="add-btn">EDIT</button></Link>
            <button type="button" id="fork" className="add-btn">FORK</button>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{size: 10, offset: 1}} lg={{size: 6, offset: 3}} className="text-center">

            <i className="fa fa-clock-o"></i>
            <p className="time">{this.props.cur_recipe.time}</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{ size: 10, offset: 1}} lg={{ size: 6, offset: 3}} className="text-center synopsis">
              <p>{this.props.cur_recipe.description}</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{ size: 10, offset: 1}} lg={{size: 6, offset: 3}} className="text-center synopsis">
            <h2>INGREDIENTS</h2>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{size: 10, offset: 1}} lg={{size: 6, offset: 3}} className="synopsis ing-list">
            <ul className="list-ing-1">
              {
              ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)
              }
            </ul>
            <ul className="list-ing-2">

            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{size: 10, offset: 1}} lg={{size: 6, offset: 3}} className="text-center synopsis">
            <h2>DIRECTIONS</h2>
            <hr></hr>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md={{ size: 10, offset: 1}} lg={{ size: 6, offset: 3}} className="synopsis">
            <ol className="list-numbers">
              {
                instructions.map((instruction) => <li key={instruction}><span>{instruction}</span></li>)
              }
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
    )
  }
}

FullRecipe.propTypes = {
  createBlank: PropTypes.func,
  loadRecipe: PropTypes.func,
  cur_recipe: PropTypes.object,
};

export default FullRecipe;

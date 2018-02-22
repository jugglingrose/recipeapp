import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class FullRecipe extends React.Component {


  render(){
    var id = (this.props.match.params.id);
    var ingredients = (this.props.recipes[id].ingredient);
    var instruction = (this.props.recipes[id].instruction);
    console.log(ingredients);


    return(
      <div id="synopsis-page">
        <div className="content">
      <Container fluid={true}>
        <Row>
          <Col xs="12" md={{ size: 10, offset: 1}} lg={{ size: 6, offset: 3}} className="recipe-img">
              <img src=".../assets/img/food_blur.jpg"  alt="food"></img>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{size: 10, offset: 1}} lg={{size: 6, offset: 3}} className="text-center synopsis">
            <div className="summary-title">
              <h2>{this.props.recipes[id].title}</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md={{size: 10, offset: 1}} lg={{size: 6, offset: 3}} className="text-center">
            <Link to={"/edit/" + id}><button type="button" className="add-btn">EDIT</button></Link>
            <button type="button" className="add-btn">FORK</button>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{size: 10, offset: 1}} lg={{size: 6, offset: 3}} className="text-center">

            <i className="fa fa-clock-o"></i>
            <p className="time">{this.props.recipes[id].time}</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{ size: 10, offset: 1}} lg={{ size: 6, offset: 3}} className="text-center synopsis">
              <p>{this.props.recipes[id].description}</p>
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
                instruction.map((instruction) => <li key={instruction}><span>{instruction}</span></li>)
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

export default FullRecipe;

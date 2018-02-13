import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Synopsis from './Synopsis';
import Add from './Add';

import { Route } from 'react-router-dom';

/*import PropTypes from 'prop-types';*/

class Landing extends React.Component{

  goToAdd() {
    console.log("you are going to the add recipe page");
    /*this.context.router.transitionTo(`/add`);*/
  }

  render(){
    return(
      <div className="login-contain">
        <Container fluid={true}>
          <Row>
            <Col xs="12" className="text-center">
              <h1 className="recipe-desc">A Place to Store Your Favorite Recipes</h1>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <form>
                <div className="search-group">
                  <div className="input-group-button">
                    <button type="submit" value="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                  <input type="text" className="navbar-search" name="search" placeholder="Search For Recipe" />
                </div>
              </form>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 10, offset: 1}} lg={{ size: 6, offset: 3}} className="text-center">
              <button type="button" className="add-btn" onClick={this.goToAdd}>ADD</button>
            </Col>
          </Row>
          <Synopsis />
      </Container>
    </div>
    );
  }
}

/*Landing.PropTypes= {
	router: React.PropTypes.object
}*/

export default Landing;

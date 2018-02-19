import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Synopsis from './Synopsis';

class Landing extends React.Component{

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
              <a href="/add"><button type="button" className="add-btn">ADD</button></a>
            </Col>
          </Row>
          <ul>
            {
              Object
              .keys(this.props.recipes)
              .map(key => <Synopsis key={key} details={this.props.recipes[key]}/>)
            }

          </ul>
      </Container>
    </div>
    );
  }
}


export default Landing;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class Login extends React.Component {
  render(){
    return (
      <div id="login-page">
        <Container fluid={true} className="login-contain">
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }} className="text-center">
              <h1>Recipe App</h1>
              <p>Log In</p>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
              <input className="btm-margin" type="text" name="username" placeholder="USERNAME"></input>
              <input type="text" name="username" placeholder="PASSWORD"></input>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="text-center">
              <button className="add-btn" type="button">ENTER</button>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }} className="text-center">
              <p>New User? Create account:</p>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
              <input className="btm-margin" type="text" name="username" placeholder="USERNAME"></input>
              <input className="btm-margin" type="email" name="email" placeholder="EMAIL"></input>
              <input className="btm-margin" type="password" name="password" placeholder="PASSWORD"></input>
              <input type="password" name="verify-password" placeholder="VERIFY PASSWORD"></input>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="text-center">
              <button class="add-btn" type="button">CREATE</button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.loginFieldChange = this.loginFieldChange.bind(this);

    this.state = {
      /*name: "",
      email: "",
      password: "",*/
      User: {},
    }
  }

  loginFieldChange = (fieldName) => (e) => {
    const value = e.target.value;
    const User = {...this.state.User};
    User[fieldName] = value;
    console.log(User);
    this.setState({ User : User});
  }


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
              <input className="btm-margin" type="text" name="username" placeholder="USERNAME" required></input>
              <input type="text" name="username" placeholder="PASSWORD" required ></input>
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
              <input className="btm-margin" type="text" name="username" placeholder="USERNAME" onChange={this.loginFieldChange("username")} required></input>
              <input className="btm-margin" type="email" name="email" placeholder="EMAIL" required></input>
              <input className="btm-margin" type="password" name="password" placeholder="PASSWORD" required></input>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="text-center">

              <button onClick={() => {this.props.addNewUser(this.state.User)}} className="add-btn" type="button">CREATE</button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

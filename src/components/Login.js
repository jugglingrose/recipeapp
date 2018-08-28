import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.newFieldChange = this.newFieldChange.bind(this);
    this.loginFieldChange = this.loginFieldChange.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      /*name: "",
      email: "",
      password: "",*/
      userLogin: {},
      newUser: {},
    }
  }

  /*When user has entered their login username and password, the login function
  will be called.  This function will pass the userLogin state and a url.  The url
  is the url the react app will be redirected to once login is successful*/
  login = () => {
    this.props.loginUser(this.state.userLogin,
      (url) => {
        console.log("redirected!")
        //If loginRedirect is NOT undefined
        if(url !== undefined) {
          this.props.history.push(url);
        }
        //if loginRedirect is undefined
        else{
          this.props.history.push('/');
        }
      });
  }

  //Update userLogin State when user types into the LogIn Fields//
  loginFieldChange = (fieldName) => (e) => {
    const value = e.target.value;
    const userLogin = {...this.state.userLogin};
    userLogin[fieldName] = value;
    console.log(userLogin);
    this.setState({ userLogin : userLogin});
  }
  //Update newUser State when user types into the signUp Fields//
  newFieldChange = (fieldName) => (e) => {
    const value = e.target.value;
    const newUser = {...this.state.newUser};
    newUser[fieldName] = value;
    console.log(newUser);
    this.setState({ newUser : newUser});
  }

  render(){
    console.log("Checking props location", this.props.location);
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
              <input className="btm-margin" type="text" name="username" placeholder="USERNAME" onChange={this.loginFieldChange("username")} required></input>
              <input type="text" name="username" placeholder="PASSWORD" onChange={this.loginFieldChange("password")} required ></input>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="text-center">
              <button onClick={()=> {this.login()}} className="add-btn" type="button">ENTER</button>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }} className="text-center">
              <p>New User? Create account:</p>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
              <input className="btm-margin" type="text" name="username" placeholder="USERNAME" onChange={this.newFieldChange("username")} required></input>
              <input className="btm-margin" type="name" name="name" placeholder="NAME" onChange={this.newFieldChange("name")} required></input>
              <input className="btm-margin" type="password" name="password" placeholder="PASSWORD" onChange={this.newFieldChange("password")} required></input>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="text-center">
              <button onClick={() => {this.props.addNewUser(this.state.newUser)}} className="add-btn" type="button">CREATE</button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

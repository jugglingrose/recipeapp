import React from 'react';
import { Redirect } from 'react-router';


class EnsureLoggedIn extends React.Component {

  render(){
    console.log("EntureLoggedIn render() called");
    console.log(this.props.children);
    if(this.props.authed){
      console.log("ensured logged in render called. authed is true, access");
      return this.props.children;
    }
    else{
      console.log("ensured logged in render called. authed is false");
      return (
        <Redirect to="/login" />
      );

    }
  }
}

export default EnsureLoggedIn;

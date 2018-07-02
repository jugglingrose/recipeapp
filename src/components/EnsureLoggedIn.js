import React from 'react';
import { Redirect } from 'react-router';


class EnsureLoggedIn extends React.Component {

  render(){
    console.log("EntureLoggedIn render() called");
    console.log(this.props.children);
    //If user already logged in (cookies authed), then let them access all pages//
    if(this.props.authed){
      console.log("ensured logged in render called. authed is true, access");
      return this.props.children;
    }
    /*If user not already logged in (cookies NOT authed), user must log in to access
    pages that require authorization. Users current page will be saved into login Redirect
    state using the setLoginRedirect() function for future redirect.  Then user
    will be redirected to the login page.*/

    else{
      console.log("ensured logged in render called. authed is false");
      this.props.setLoginRedirect(this.props.location.pathname);
      return (
        <Redirect to="/login" />
      );

    }
  }
}

export default EnsureLoggedIn;

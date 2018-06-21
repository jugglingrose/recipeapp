import React from 'react';


class EnsureLoggedIn extends React.Component {

  componentDidMount() {
          if(!this.props.authed){
            console.log("ensured logged in component called");
            this.props.history.push("/login");
          }
  }

  render(){
    if(this.props.authed){
      console.log("ensured logged in component called. authed is true, access");
      return this.props.children;
    }
    else{
      return null;
    }
  }
}

export default EnsureLoggedIn;

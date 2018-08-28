import React from 'react';
import { Link } from 'react-router-dom';

class DropDown extends React.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      showMenu: false,
    }
  }

  toggleMenu() {
    this.setState({showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <div>
        <div className= "dd-button-wrap">
          <button onClick={this.toggleMenu} >
            <i className="fa fa-cog"></i>
          </button>
        </div>
          {
            this.state.showMenu
            ? (
              <div className="dd-menu">
                {
                  this.props.authed
                  ? (
                    <div className="dd-menu-divs" onClick={ this.props.logOut }>Log Out</div>
                  )
                  :(
                    <div className="dd-menu-divs"><Link to="/login">Log In</Link></div>
                  )
                }

              </div>


            )
            :(
              null
            )
        }
        </div>
      );
    }
  }

export default DropDown;

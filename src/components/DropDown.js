import React from 'react';

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
                <ul>
                  <li>Log Out</li>
                </ul>
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

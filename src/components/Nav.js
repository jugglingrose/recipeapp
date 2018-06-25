import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

class Nav extends React.Component {
  render() {
    return (
          <nav className="navBar">
            <div className="navbar-header">
              <ul>
                <li>
                  <Link to="/">Recipe App</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-navigation">

            <div className="desktop-nav">
              <ul>
                <Link to="/add"><li>ADD RECIPE</li></Link>
                <li>
                  <form className="navbar-form" action="#">
                    <div id="search" className="input-grp">
                      <input type="text" className="navbar-search" name="search"/>
                      <div className="input-group-btn">
                        <button className="submit" type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </li>
              </ul>
            </div>

            {/*<div className="perm-nav">*/}
              {/*<ul>
                <li className="settings"><i className="fa fa-cog"></i></li>
              </ul>*/}
              <DropDown />

            </div>
          </nav>

    )
  }
}

export default Nav;

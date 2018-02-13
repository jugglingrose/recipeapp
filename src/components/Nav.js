import React from 'react';

class Nav extends React.Component {
  render() {
    return (
          <nav className="navBar">
            <div className="navbar-header">
              <ul>
                <li>
                  <a className="navbar-brand" href="/">Recipe App</a>
                </li>
              </ul>
            </div>
            <div className="navbar-navigation">

            <div className="desktop-nav">
              <ul>
                <a href="/add"><li>ADD RECIPE</li></a>
                <li>
                  <form className="navbar-form" action="#">
                    <div className="input-grp">
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

            <div className="perm-nav">
              <ul>
                <li className="settings"><i className="fa fa-cog"></i></li>
              </ul>
            </div>
            </div>
          </nav>

    )
  }
}

export default Nav;

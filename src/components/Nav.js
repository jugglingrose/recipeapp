import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div>
          <nav className="navBar">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Recipe App</a>
            </div>
            <div className="navbar-nav">

              <ul>
                <li>ADD RECIPE</li>
                <li>
                  <form className="navbar-form" action="#">
                    <div className="input-group">
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
          

              <ul>
                <li className="settings"><i className="fa fa-cog"></i></li>
              </ul>
            </div>

          </nav>
        </div>
    )
  }
}

export default Nav;

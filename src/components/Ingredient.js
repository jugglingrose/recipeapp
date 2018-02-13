import React from 'react';

class Ingredient extends React.Component {
  render() {
    return(
        <div className="ing-input">
          <input type="text" ref={(input) => { this.ingredient = input }} name="ingredient" placeholder="Ingredient"></input>
          <div className="input-group-button ing-btn">
            <button className="delete-btn">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
  	);
  }
}

export default Ingredient;

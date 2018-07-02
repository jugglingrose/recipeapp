import React from 'react';
import PropTypes from 'prop-types';


class Ingredient extends React.Component{
  render(){

    /*var recipeId = this.props.recipeId;*/
    var ingId = this.props.ingId;

  return(
    <div className="ing-input">
      <input placeholder="Ingredient" type="text" name="ingredient" value={this.props.ing}
        onChange={this.props.arrayChange('ingredient', ingId)}></input>
      <div className="input-group-button ing-btn">
        <button type="button" onClick={this.props.delChange('ingredient', ingId)} className="delete-btn">
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  )
  }
}

Ingredient.propTypes = {
  delChange: PropTypes.func,
  ing: PropTypes.string

};

export default Ingredient;

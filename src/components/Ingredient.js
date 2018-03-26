import React from 'react';
import {Container, Row, Col} from 'reactstrap';

class Ingredient extends React.Component{
  render(){

    var recipeId = this.props.recipeId;
    var ingId = this.props.ingId;

  return(
    <div className="ing-input">
      <input type="text" name="ingredient" value={this.props.ing}
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

export default Ingredient;

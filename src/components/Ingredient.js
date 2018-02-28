import React from 'react';
import {Container, Row, Col} from 'reactstrap';

class Ingredient extends React.Component{
  render(){

    const ingredient = this.props.ing;
    const ingId = this.props.ingId;

    console.log("ingredients is " + ingredient);
    console.log("ingredient id is " + ingId);


    return(
    <div className="ing-input">
      <input type="text" name="ingredient" value={ingredient} onChange={this.props.ingChange(ingId)}></input>
      <div className="input-group-button ing-btn">
        <button className="delete-btn">
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  )
  }
}

export default Ingredient;

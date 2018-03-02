import React from "react";
import {Container, Row, Col} from "reactstrap";

class Instruction extends React.Component{
  render(){

    const recipeId = this.props.recipeId;
    const instructionId = this.props.instructionId;

    return(
      <Row>
        <Col xs="12" lg={{ size: 6, offset: 3}}>
          <div className="inst-grp">
            <textarea type="text"  name="instruction" className="instruction" rows="4" columns="10" value={ this.props.instruction} onChange={this.props.instructionChange(recipeId, instructionId)}></textarea>
            <div className="instruct-btn-grp">
              <div className="input-group-button">
                <button className="drag-button">
                  <i className="fa fa-arrows-v"></i>
                </button>
              </div>
              <div className="input-group-button del">
                <button type="button" onClick={this.props.delInstruction(recipeId, instructionId)} className="del">
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>

    )
  }
}


export default Instruction;

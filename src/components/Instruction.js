import React from "react";
import {Row, Col} from "reactstrap";
import PropTypes from 'prop-types';

class Instruction extends React.Component{
  render(){

    /*const recipeId = this.props.recipeId;*/
    const instructionId = this.props.instructionId;

    return(
      <Row>
        <Col xs="12" lg={{ size: 6, offset: 3}}>
          <div className="inst-grp">
            <textarea type="text"  placeholder="Instruction" name="instruction" className="instruction"
              rows="4" columns="10" value={ this.props.instruction} onChange={this.props.arrayChange('instruction', instructionId)}></textarea>
            <div className="instruct-btn-grp">
              <div className="input-group-button">
                <button className="drag-button">
                  <i className="fa fa-arrows-v"></i>
                </button>
              </div>
              <div className="input-group-button del">
                <button type="button" onClick={this.props.delChange('instruction', instructionId)}
                  className="del">
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

Instruction.propTypes = {
  instructionId: PropTypes.number,
  instruction: PropTypes.string,
  delChange: PropTypes.func,
  arrayChange: PropTypes.func
};


export default Instruction;

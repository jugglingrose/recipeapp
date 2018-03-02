import React from 'react';
import {Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

class Synopsis extends React.Component{
  render(){
    return(

      <Row>
        <Col xs="12" md={{ size: 10, offset: 1}} lg={{ size: 6, offset: 3}} className="btm-margin">
          <div className="summary-title">
              <Link to={"/full/" + this.props.id} style={{ color: 'white'}}><h2>{this.props.details.title}</h2></Link>
          </div>
          <div className="summary">
            <p>{this.props.details.description}</p>
          </div>
        </Col>
      </Row>

    );
  }
}

export default Synopsis;

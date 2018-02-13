import React from 'react';
import { Row, Col } from 'reactstrap';

class Footer extends React.Component {
  render() {
    return(
          <footer>
            <Row>
              <Col xs="12" className="foot text-center">
                <p>copyright 2018</p>
              </Col>
            </Row>
          </footer>
    );
  }
}

export default Footer;

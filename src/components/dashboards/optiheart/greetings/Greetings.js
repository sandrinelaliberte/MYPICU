import React from 'react';
import Flex from 'components/common/Flex';
import { Card, Col, Row } from 'react-bootstrap';
import GreetingsDate from './GreetingsDate';

const Greetings = () => {
  return (
    <Card className="bg-100 shadow-none border mb-3">
      <Card.Body>
        <Row className="g-0 justify-content-between">
          <Col sm="auto">
            <Flex alignItems="center">
              <div>
                <h4 className="text-primary fw-bold mb-0">
                  Gagné, Coralie (#5)
                </h4>
                <h6 className="text-gray700  fs-10 mb-0">
                  Trauma crânien sévère (Latest Glasgow 3)
                </h6>
                <h6 className="text-gray700  fs-10 mb-0">Âge: 4a 4m 12j</h6>
                <h6 className="text-gray700  fs-10 mb-0">Poids: 9.09kg</h6>
                <h6 className="text-gray700  fs-10 mb-0">#JUSIP: J6</h6>
              </div>
            </Flex>
          </Col>
          <Col md="auto" className="mb-3 mb-md-0">
            <Row className="g-3 gy-md-0 h-100 align-items-center">
              <Col xs="auto">
                <h6 className="text-700 mb-0 text-nowrap">Showing Data For:</h6>
              </Col>
              <Col md="auto">
                <GreetingsDate />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Greetings;

import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import CardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import FalconLink from 'components/common/Link';
import TrafficSourceChart from './TrafficSourceChart';

function TrafficSource() {
  return (
    <Card className="h-100">
      <CardHeader
        title="Traffic source"
        titleTag="h6"
        className="py-2"
        light
        endEl={<CardDropdown />}
      />
      <Card.Body>
        <TrafficSourceChart />
      </Card.Body>

      <Card.Footer className="bg-body-tertiary py-2">
        <Row className="g-0 flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm">
              <option>Last 7 days</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <FalconLink
              title="Acquisition overview"
              className="px-0 fw-medium"
            />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default TrafficSource;

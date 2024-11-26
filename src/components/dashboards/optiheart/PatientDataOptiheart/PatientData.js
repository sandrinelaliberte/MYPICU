import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Form, Nav, Row, Tab } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import PatientChart from './PatientChart';
import { patientChartData as patientChartData } from 'data/dashboard/optiheart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardDropdown from 'components/common/CardDropdown';

const NavItem = ({ item }) => {
  return (
    <Nav.Item as="li">
      <Nav.Link
        className="mb-0 py-3 cursor-pointer"
        eventKey={item.toLowerCase()}
      >
        {item}
      </Nav.Link>
    </Nav.Item>
  );
};

const Patient = () => {
  const [navItems] = useState(['Heartrate', 'BT']);
  return (
    <Card className="mt-3">
      <Tab.Container id="audience-tab" defaultActiveKey="Heartrate">
        <Card.Header
          as={Flex}
          justifyContent="between"
          alignItems="center"
          className="ps-0 py-0 border-bottom"
        >
          <Nav
            as="ul"
            className="nav-tabs border-0 flex-nowrap chart-tab tab-active-caret"
          >
            {navItems.map(item => (
              <NavItem item={item} key={item} />
            ))}
          </Nav>
          <CardDropdown />
        </Card.Header>

        <Card.Body>
          <Row className="g-1">
            <Col xxl={3}>
              <Row className="g-0 my-2">
                <Col md={6} xxl={12}>
                  <div className="border-xxl-bottom border-xxl-200 mb-2">
                    <h2 className="text-danger">150 bpm</h2>
                    <p className="fs-11 text-500 fw-semibold mb-0">
                      <FontAwesomeIcon
                        icon="circle"
                        className="text-danger me-2"
                      />
                      Heart rate target: 86-123 bpm{' '}
                    </p>
                    <p className="fs-11 text-500 fw-semibold">
                      <FontAwesomeIcon
                        icon="circle"
                        className="text-warning me-2"
                      />
                      Adherence: 86.2% adherence
                    </p>
                  </div>
                </Col>
                <Col xxl={9}>
                  <Tab.Content>
                    <Tab.Pane unmountOnExit eventKey="Heartrate">
                      <PatientChart data={patientChartData.dataset.Heartrate} />
                    </Tab.Pane>
                    <Tab.Pane unmountOnExit eventKey="BT">
                      <PatientChart data={patientChartData.dataset.BT} />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
};

NavItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default Patient;

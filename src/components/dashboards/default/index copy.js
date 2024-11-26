import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Greetings from './Greetings';
import AddInfo from './AddInfo';
import PatientManagement from './PatientManagement';
import {
  greetingItems,
  runningProjects
} from 'data/dashboard/projectManagement';

const ProjectManagement = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col xxl={6} lg={12}>
          <Greetings data={greetingItems} />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col xxl={{ span: 12, order: 3 }}>
          <PatientManagement data={runningProjects} />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col xxl={4}>
          <AddInfo />
        </Col>
      </Row>
    </>
  );
};

export default ProjectManagement;

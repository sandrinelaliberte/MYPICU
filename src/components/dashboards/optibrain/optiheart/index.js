import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PatientsStats from './PatientsStats';
import PatientData from './PatientDataOptiheart/PatientData';
import Greetings from './greetings/Greetings';
import StorageStatus from './StorageStatus';

const optiheart = () => {
  return (
    <>
      <Greetings />
      <Row className="g-3 mb-3">
        <Col xxl={9}>
          <PatientsStats />
          <PatientData />
        </Col>
      </Row>
    </>
  );
};
export default optiheart;

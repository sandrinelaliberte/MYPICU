import Background from 'components/common/Background';
import Flex from 'components/common/Flex';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Greetings = ({ data }) => {
  return (
    <Card className="h-100">
      <Background className="rounded-soft bg-card" />
      <Card.Header className="z-1">
        <h5 className="text-primary">Today’s Recommandations</h5>
        <h6 className="text-600">
          Today, you are in charge of PED A, here are some important
          informations and recommandations to start your day the right way !
        </h6>
      </Card.Header>
      <Card.Body className="z-1">
        <Row className="g-2 h-100 align-items-end">
          {data.map(({ title, text }) => {
            return (
              <Col sm={6} md={5} key={title}>
                <Flex className="position-relative">
                  <div className="flex-1">
                    <Link to="#!" className="stretched-link text-800">
                      <h6 className="mb-0">{title}</h6>
                    </Link>
                    <p className="mb-0 fs-11 text-500 ">{text}</p>
                  </div>
                </Flex>
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};

Greetings.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  )
};

export default Greetings;

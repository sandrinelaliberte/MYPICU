import CardHeader from 'components/common/FalconCardHeader';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BillingSettings = () => {
  return (
    <Card className="mb-3">
      <CardHeader title="Billing Setting" />
      <Card.Body className="bg-body-tertiary">
        <h5>Plan</h5>
        <p className="fs-9">
          <strong>Developer</strong> - Unlimited private repositories
        </p>
        <Button as={Link} variant="falcon-default" size="sm" to="#!">
          Update Plan
        </Button>
      </Card.Body>
      <Card.Body className="bg-body-tertiary border-top">
        <h5>Payment</h5>
        <p className="fs-9">You have not added any payment.</p>
        <Button as={Link} variant="falcon-default" size="sm" to="#!">
          Add Payment
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BillingSettings;

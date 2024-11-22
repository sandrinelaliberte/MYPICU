import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Collapse } from 'react-bootstrap';

const ProfileIntro = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Card className="mb-3">
      <Card.Header className="bg-body-tertiary">
        <h5 className="mb-0">Intro</h5>
      </Card.Header>

      <Card.Body className="text-1000">
        <p>

        </p>
        <Collapse in={collapsed}>
          <div>
            <p>
              I've acquired a wide depth of knowledge and expertise in using my
              technical skills in programming, computer science, software
              development, and mobile app development to developing solutions to
              help organizations increase productivity, and accelerate business
              performance.
            </p>
            <p>
            </p>
            <p>

            </p>
          </div>
        </Collapse>
      </Card.Body>

      <Card.Footer className="bg-body-tertiary p-0 border-top d-grid">
        <Button
          variant="link"
          // className="me-2 mb-1"
          onClick={() => setCollapsed(!collapsed)}
        >
          Show {collapsed ? 'less' : 'more'}
          <FontAwesomeIcon
            icon="chevron-down"
            className="ms-2 fs-11"
            transform={collapsed ? 'rotate-180' : ''}
          />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProfileIntro;

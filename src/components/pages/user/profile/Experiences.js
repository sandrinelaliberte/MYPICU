import React from 'react';
import { Card } from 'react-bootstrap';
import experiences from 'data/experiences';
import CardHeader from 'components/common/FalconCardHeader';
import Experience from '../Experience';

const Experiences = () => {
  return (
    <Card className="mb-3">
      <CardHeader title="Experience" light />
      <Card.Body className="fs-10">
        {experiences.map((experience, index) => (
          <Experience
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Experiences;

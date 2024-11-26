import React from 'react';
import CardDropdown from 'components/common/CardDropdown';
import CardHeader from 'components/common/FalconCardHeader';
import SimpleBar from 'simplebar-react';
import { Card } from 'react-bootstrap';
import SatisfactionSurveyChart from './SatisfactionSurveyChart';
import FalconLink from 'components/common/Link';

const SatisfactionSurvey = () => {
  return (
    <Card className="mt-3">
      <CardHeader
        title="Customer Satisfaction Survey"
        titleTag="h6"
        className="py-2 border-bottom"
        endEl={<CardDropdown />}
      />
      <SimpleBar>
        <Card.Body>
          <SatisfactionSurveyChart />
        </Card.Body>
      </SimpleBar>
      <Card.Footer className="text-center bg-body-tertiary py-2">
        <FalconLink title="View all" className="px-0 fw-medium" />
      </Card.Footer>
    </Card>
  );
};

export default SatisfactionSurvey;

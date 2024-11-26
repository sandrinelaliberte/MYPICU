import React from 'react';
import { Card } from 'react-bootstrap';
import CardHeader from 'components/common/FalconCardHeader';
import FalconLink from 'components/common/Link';
import SalesPosLocationTable from './SalesPosLocationTable';
import SalesPosLocationChart from './SalesPosLocationChart';

const SalesPosLocation = ({ ...rest }) => {
  return (
    <Card {...rest}>
      <CardHeader
        title="Sales by POS location"
        titleTag="h6"
        className="py-2"
        light
        endEl={<FalconLink title="View details" className="px-0 " />}
      />
      <Card.Body className="px-0 pb-0">
        <SalesPosLocationTable />
        <SalesPosLocationChart />
      </Card.Body>
    </Card>
  );
};

export default SalesPosLocation;

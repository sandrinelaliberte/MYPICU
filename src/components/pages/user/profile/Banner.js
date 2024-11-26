import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import coverSrc from 'assets/img/generic/4.jpg';
import apple from 'assets/img/logos/apple.png';
import google from 'assets/img/logos/g.png';
import hp from 'assets/img/logos/hp.png';
import avatar from 'assets/img/team/2.jpg';
import Flex from 'components/common/Flex';
import VerifiedBadge from 'components/common/VerifiedBadge';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileBanner from '../ProfileBanner';

const Banner = () => {
  const [rightSidedItems] = useState([
    {
      title: 'Google',
      image: google
    },
    {
      title: 'Apple',
      image: apple
    },
    {
      title: ' Hewlett Packard',
      image: hp
    }
  ]);
  return (
    <ProfileBanner>
      <ProfileBanner.Header avatar={avatar} coverSrc={coverSrc} />
      <ProfileBanner.Body>
        <Row>
          <Col lg={8}>
            <h4 className="mb-1">
              Phillipe Jouvet <VerifiedBadge />
            </h4>
            <h5 className="fs-9 fw-normal">DR, Intensive Care Unit</h5>
            <p className="text-500">CHU Sainte-Justine</p>
            <div className="border-dashed border-bottom my-4 d-lg-none" />
          </Col>
        </Row>
      </ProfileBanner.Body>
    </ProfileBanner>
  );
};

export default Banner;

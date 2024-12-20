import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';
import createMarkup from 'helpers/createMarkup';
import FeedEvent from './FeedEvent';
import classNames from 'classnames';
import FeedUrl from './FeedUrl';
import FeedGallery from 'components/app/social/feed/FeedGallery';
import LightBox from 'components/common/LightBox';

const FeedCardContent = ({
  status,
  imgSrc,
  gallery,
  feedEvent,
  url,
  video
}) => {
  return (
    <Card.Body className={classNames({ 'p-0': !!feedEvent })}>
      {!!status && <p dangerouslySetInnerHTML={createMarkup(status)} />}
      {!!imgSrc && (
        <LightBox image={imgSrc}>
          <Image src={imgSrc} fluid rounded />
        </LightBox>
      )}
      {!!gallery && <FeedGallery images={gallery} />}
      {!!feedEvent && <FeedEvent {...feedEvent} />}
      {!!url && <FeedUrl {...url} />}
      {!!video && (
        <ReactPlayer url={video.src} controls={true} className="react-player" />
      )}
    </Card.Body>
  );
};

FeedCardContent.propTypes = {
  status: PropTypes.string,
  imgSrc: PropTypes.string,
  gallery: PropTypes.array,
  feedEvent: PropTypes.object,
  url: PropTypes.object,
  video: PropTypes.object
};

export default FeedCardContent;

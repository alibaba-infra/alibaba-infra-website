import React from 'react';
import PropTypes from 'prop-types';
import { getLink } from '../../../utils';

import './index.scss';

const propTypes = {
  language: PropTypes.oneOf(['zh-cn', 'en-us']).isRequired,
  text: PropTypes.string.isRequired,
  moreLink: PropTypes.string.isRequired,
};

const ListHeader = (props) => {
  const { language, text, moreLink } = props;
  return (
    <div className="list-header">
      <img src="https://img.alicdn.com/tfs/TB1EkSmnYvpK1RjSZFqXXcXUVXa-640-192.png" />
      <span className="list-title">{text}</span>
      <a className="more" href={getLink(moreLink)}>
        {
          language === 'en-us' ? 'more' : '更多'
        }
      </a>
    </div>
  );
};

ListHeader.propTypes = propTypes;

export default ListHeader;
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { getLink } from '../../../utils';

import './index.scss';

const propTypes = {
  language: PropTypes.oneOf(['zh-cn', 'en-us']),
  dataSource: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

const ActivityBar = (props) => {
  const { img, title, description, amount, date, address, link } = props.dataSource;
  const { language } = props;
  return (
    <div
      className="activity-bar"
      style={{ backgroundImage: `url(${getLink(img)})` }}
    >
      <div>
        <div className="activity-bar-container">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <span className="amount">
            <span className="label">{language === 'en-us' ? 'quota：' : '活动名额：'}</span>
            <span className="item-value">{amount}</span>
          </span>
          <span className="date">
            <span className="label">{language === 'en-us' ? 'date：' : '活动时间：'}</span>
            <span className="item-value">{date}</span>
          </span>
          <span className="address">
            <span className="label">{language === 'en-us' ? 'address：' : '活动地点：'}</span>
            <span className="item-value">{address}</span>
          </span>
          <div>
            <Button type="normal" link={link}>{language === 'en-us' ? 'register' : '我要报名'}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ActivityBar.propTypes = propTypes;

export default ActivityBar;

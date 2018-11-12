import React from 'react';
import PropTypes from 'prop-types';
import { getLink } from '../../../utils';

import './index.scss';

const propTypes = {
  language: PropTypes.oneOf(['zh-cn', 'en-us']),
  dataSource: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.array,
  }),
};

const TechBar = (props) => {
  const { img, title, description, author, date, tags } = props.dataSource;
  const { language } = props;
  return (
    <div
      className="tech-bar"
      style={{ backgroundImage: `url(${getLink(img)})` }}
    >
      <div>
        <div className="tech-bar-container">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <div className="author">
            <span className="label">{language === 'en-us' ? 'author：' : '作者：'}</span>
            <span className="item-value">{author}</span>
          </div>
          <div className="date">
            <span className="label">{language === 'en-us' ? 'date：' : '发布时间：'}</span>
            <span className="item-value">{date}</span>
          </div>
          {
            tags && tags.length ?
            <div className="tags">
              <span className="label">{language === 'en-us' ? 'technical category：' : '技术分类：'}</span>
              <span className="tag-area item-value">
              {
                tags.map(tag => <span className="tag" key={tag}>{tag.trim()}</span>)
              }
              </span>
            </div> : null
          }
        </div>
      </div>
    </div>
  );
};

TechBar.propTypes = propTypes;

export default TechBar;

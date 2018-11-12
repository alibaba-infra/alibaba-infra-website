import React from 'react';
import PropTypes from 'prop-types';
import { getLink } from '../../../utils';
import './index.scss';

const propTypes = {
  dataSource: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tags: PropTypes.array,
  }),
  size: PropTypes.oneOf(['normal', 'large']),
};

const defaultProps = {
  size: 'normal',
};

const TechItem = (props) => {
  const { img, title, author, date, link, tags } = props.dataSource;
  const size = props.size;
  return (
    <div className={`tech-item tech-item-${size}`}>
      <a href={getLink(link)}>
        <div className="front" style={{ backgroundImage: `url(${getLink(img)})` }}>
          <p>{title}</p>
        </div>
        <div className="back">
          <p className="title">{title}</p>
          <div className="bottom">
            <p className="author">{author}</p>
            <p className="date">{date}</p>
            {
              tags && tags.length ?
              <div className="tag-area">
                {
                  tags.map(tag => <span className="tag" key={tag}>{tag.trim()}</span>)
                }
              </div> : null
            }
          </div>
        </div>
      </a>
    </div>
  );
};

TechItem.propTypes = propTypes;
TechItem.defaultProps = defaultProps;

export default TechItem;

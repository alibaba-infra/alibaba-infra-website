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
};

const NewsItem = (props) => {
  const { img, title, author, date, link, tags } = props.dataSource;
  return (
    <div className="news-item">
      <a href={getLink(link)}>
        <img src={getLink(img)} />
        <p>{title}</p>
      </a>
      <div className="author-area">
        <p>{author}</p>
        <span>{date}</span>
      </div>
      {
        tags && tags.length ?
        <div className="tag-area">
          {
            tags.map(tag => <span className="tag" key={tag}>{tag}</span>)
          }
        </div>
        : null
      }
    </div>
  );
};

NewsItem.propTypes = propTypes;

export default NewsItem;

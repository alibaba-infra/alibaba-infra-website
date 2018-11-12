import React from 'react';
import PropTypes from 'prop-types';
import TechItem from '../../components/techItem';
import Button from '../../components/button';

import './techRec.scss';

const propTypes = {
  dataSource: PropTypes.shape({
    topic: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tags: PropTypes.array,
  }),
  language: PropTypes.oneOf(['zh-cn', 'en-us'])
};

const TechRec = (props) => {
  const { language } = props;
  const { topic, img, title, author, date, link, tags } = props.dataSource;
  return (
    <div className="tech-rec">
      <div className="left-part">
        <p className="topic">{topic}</p>
        <div className="label author"><span>{language === 'en-us' ? 'author' : '作者'}</span></div>
        <div className="value">{author}</div>
        <div className="label date"><span>{language === 'en-us' ? 'date' : '更新时间'}</span></div>
        <div className="value">{date}</div>
        {
          tags && tags.length ?
          <div className="tag-area">
            {
              tags.map(tag => <span className="tag" key={tag}>{tag.trim()}</span>)
            }
          </div> : null
        }
        <Button type="primary" link={link}>{language === 'en-us' ? 'View Recommended' : '查看推荐文章'}</Button>
      </div>
      <div className="right-part">
        <TechItem
          dataSource={{
            img,
            title,
            author,
            date,
            link,
            tags,
          }}
          size="large"
        />
      </div>
    </div>
  );
};
TechRec.propTypes = propTypes;

export default TechRec;

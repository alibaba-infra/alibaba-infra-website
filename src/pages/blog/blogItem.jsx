import React from 'react';
import { autobind } from 'core-decorators';
import { getLink } from '../../../utils';

import './blogItem.scss';

@autobind
class BlogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  onMouseOver() {
    this.setState({
      isHovered: true,
    });
  }

  onMouseOut() {
    this.setState({
      isHovered: false,
    });
  }

  render() {
    const { dataSource } = this.props;
    const { link } = dataSource;
    const { title, author, date, description, tags } = dataSource.meta;
    const { isHovered } = this.state;
    return (
      <a
        href={getLink(link)}
        className="blog-item"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <div className="title">
          <img src={isHovered ? getLink('/img/system/docs_hover.png') : getLink('/img/system/docs_normal.png')} />
          <span>{title}</span>
        </div>
        <div className="brief-info">
          <span className="author">{author}</span>
          <span>
          {
            tags && tags.split(/[，,、]/).map(tag => <span className="tag" key={tag}>{tag.trim()}</span>)
          }
          </span>
          <span className="date">{date}</span>
        </div>
        <p>{description}</p>
      </a>
    );
  }
}

export default BlogItem;

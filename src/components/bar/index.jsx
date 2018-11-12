import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss';

const propTypes = {
  text: PropTypes.string.isRequired, // 显示的文案
};

const Bar = (props) => {
  const { text } = props;
  const cls = classnames({
    bar: true,
  });
  return (
    <div className={cls}>
      <div className="bar-body">
        <img src="https://img.alicdn.com/tfs/TB1pXC4nMHqK1RjSZFgXXa7JXXa-640-192.png" className="left-img" />
        <span>{text}</span>
        <img src="https://img.alicdn.com/tfs/TB17La2nFzqK1RjSZFvXXcB7VXa-536-400.png" className="right-img" />
      </div>
    </div>
  );
};

Bar.propTypes = propTypes;

export default Bar;

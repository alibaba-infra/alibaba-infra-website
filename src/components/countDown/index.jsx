import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  expires: PropTypes.string.isRequired,
};

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.expiresDate = new Date(props.expires);
    this.state = {
      now: new Date(),
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer = () => {
    this.timer = window.setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  clearTimer = () => {
    window.clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    if (this.state.now >= this.expiresDate) {
      this.clearTimer();
    }
    const { now } = this.state;
    const days = Math.max(Math.floor((this.expiresDate - now) / (24 * 3600 * 1000)), 0);
    const hours = Math.max(Math.floor(((this.expiresDate - now) % (24 * 3600 * 1000)) / (3600 * 1000)), 0);
    const mins = Math.max(Math.ceil(((this.expiresDate - now) % (3600 * 1000)) / (60 * 1000)), 0);
    return (
      <div className="count-down-container">
        <div className="count-item">
          <h3>{days < 10 ? `0${days}` : days}</h3>
          <span>dd</span>
        </div>
        <div className="count-item">
          <h3>{hours < 10 ? `0${hours}` : hours}</h3>
          <span>hr</span>
        </div>
        <div className="count-item">
          <h3>{mins < 10 ? `0${mins}` : mins}</h3>
          <span>min</span>
        </div>
      </div>
    );
  }
}

CountDown.propTypes = propTypes;

export default CountDown;

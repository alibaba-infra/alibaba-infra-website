import React from 'react';
import PropTypes from 'prop-types';
import siteConfig from '../../../site_config/site';
import { getLink } from '../../../utils';
import './index.scss';

const propTypes = {
  language: PropTypes.oneOf(['zh-cn', 'en-us']),
};

class Footer extends React.Component {

  render() {
    const { language } = this.props;
    const dataSource = siteConfig[language];
    return (
      <footer className="footer-container">
        <div className="footer-body">
          <img src="https://img.alicdn.com/tfs/TB1LMbbnFzqK1RjSZFoXXbfcXXa-366-46.png" />
          <div className="inter-link-container">
            {
              dataSource.interLink.map((item, index) => (
                  <div key={index} className="inter-link-row">
                    {
                      item.map(sitem => (
                          <div key={item.link} className="inter-link-item">
                            <a href={getLink(sitem.link)}>{sitem.text}</a>
                          </div>
                        )
                      )
                    }
                  </div>
                )
              )
            }
          </div>
          <div className="copyright"><span>{dataSource.copyright}</span></div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = propTypes;

export default Footer;

import React, { Component, PropTypes } from 'react';
import './css/bootstrap.css';
import './css/gaia.css';

class Header extends Component {

  static PropTypes = {
    cssFilter: PropTypes.string.isRequired,
  	cssImg: PropTypes.string.isRequired,
    headText: PropTypes.string.isRequired,
  }

  render() {
    return (
    	<div className="section section-header">
            <div className={this.props.cssFilter}>
                <div className={this.props.cssImg}></div>
                <div className="container">
                    <div className="content">
                        <div className="title-area">
                            <br /><br /><br /><br />
                            <p>{this.props.headText}</p>
                            <img src="assets/img/glico_dicut.png" height="255" width="400" />
                            <div className="separator line-separator">♦</div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Header;

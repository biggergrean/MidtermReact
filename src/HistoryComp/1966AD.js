import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD1966 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">1966</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Seven (7) Glico Dairy firms merged. <br />
                        Pocky Chocolate launched.</p>
                        <center><img alt="history16" src="https://www.glico.com/assets/materials/pic_history_16.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD1966;

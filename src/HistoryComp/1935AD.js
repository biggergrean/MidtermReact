import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD1935 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">1935</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">The first Glico Neon Sign installed conspicuously in the Ebisubashi district of Minami Ward in Osaka.</p>
                        <center><img alt="history8" src="https://www.glico.com/assets/materials/pic_history_08.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD1935;

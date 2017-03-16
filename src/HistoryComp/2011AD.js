import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD2011 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">2011</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Soreike! Anpanman Kids Sausage launched.</p>
                        <center><img alt="history37" src="https://www.glico.com/assets/materials/pic_history_37.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD2011;

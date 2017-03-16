import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD2013 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">2013</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Pocky launched in Korea. Glico-Wings established in Indonesia.</p>
                        <center><img alt="history39" src="https://www.glico.com/assets/materials/pic_history_39.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD2013;

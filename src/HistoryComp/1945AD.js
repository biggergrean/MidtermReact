import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD1945 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">1945</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Osaka and Tokyo Factories destroyed in air raids. <br />
                        Domestic and overseas production facilities and assets lost due to war.</p>
                        <center><img alt="history9" src="https://www.glico.com/assets/materials/pic_history_09.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD1945;

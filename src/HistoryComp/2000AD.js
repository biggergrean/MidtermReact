import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD2000 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">2000</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Glico Dairy Co., Ltd. renamed as Glico Dairy Products Co., Ltd. and became a 100% Glico subsidiary. <br />
                        Ezaki Glico head office and all production companies acquired ISO14001 Certification (Environmental Management System).</p>
                    </div>
        </div>
    );
  }
}

export default AD2000;

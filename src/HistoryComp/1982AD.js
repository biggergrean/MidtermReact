import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD1982 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">1982</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Ezaki Glico Foods Co., Ltd. and Glico Ham Co., Ltd. merged into Glico Foods Co., Ltd. <br />
                        Generale Biscuit Glico France (GBGF) S.A. established and Mikado launched.</p>
                        <center><img alt="history20" src="https://www.glico.com/assets/materials/pic_history_20.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD1982;

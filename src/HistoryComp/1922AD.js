import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD1922 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">1922</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Glico caramel launched at Mitsukoshi Department Store in Osaka commencing Febr /uary 11 <br />
                        – the Foundation Day of Ezaki Glico Co., Ltd.</p>
                        <center><img alt="history3" src="https://www.glico.com/assets/materials/pic_history_03.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD1922;

import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD2012 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">2012</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">90th Anniversary Customer/Dealer Appreciation Gathering held. <br />
                        Glico Foods Co., Ltd. divided into <br />
                        Glico Ham Co., Ltd. and Glico Nutrition Co., Ltd. <br />
                        Pocky launched in Indonesia and Vietnam.</p>
                        <center><img alt="history38" src="https://www.glico.com/assets/materials/pic_history_38.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD2012;

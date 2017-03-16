import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD2003 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">2003</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Ezaki Glico USA Co., Ltd. established. POs-Ca gum launched. <br />
                        Calorie Control Ice launched.</p>
                        <center><img alt="history30" src="https://www.glico.com/assets/materials/pic_history_30.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD2003;

import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD2009 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">2009</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Pari Pari Salad [noodles fried in rice oil] launched. <br />
                        ICREO Balance Milk and ICREO Follow-up Milk launched.</p>
                        <center><img alt="history35" src="https://www.glico.com/assets/materials/pic_history_35.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD2009;

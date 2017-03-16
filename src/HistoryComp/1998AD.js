import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD1998 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">1998</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Refurbishing of the huge 5th generation Glico neon sign completed at Ebisubashi, Minami in Osaka.</p>
                        <center><img alt="history29" src="https://www.glico.com/assets/materials/pic_history_29.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD1998;

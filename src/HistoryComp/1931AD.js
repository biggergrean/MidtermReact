import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD1931 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">1931</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Glico vending machines – each incorporating a film projector <br />
                        – installed in various Tokyo department stores. <br />
                        Osaka Factory opened in the Utajima district of Nishi-Yodogawa <br />
                        Ward in Osaka – the current location of the Glico Head Office.</p>
                        <center><img alt="history5" src="https://www.glico.com/assets/materials/pic_history_05.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD1931;

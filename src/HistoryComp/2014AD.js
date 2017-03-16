import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD2014 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">2014</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Pocky launched in Malaysia. <br />
                        Transfer of all Glico Ham shares to another firm. <br />
                        PT.Glico Indonesia was established in Indonesia to enhance sales of confectionaries.</p>
                    </div>
        </div>
    );
  }
}

export default AD2014;

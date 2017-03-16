import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class Vietnam extends Component {
  render() {
    return (
        <div className="section"> <br /><br /><br />
            <div className="section-white container">
                <div className="row">
                    <div className="title-area"> <br /><br />
                        <h2>Vietnam</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h4 className="glico-color"><b>The Representative Office of Thai Glico Co., Ltd. in Ho Chi Minh City</b></h4> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1">
                        <p className="description-custom-gray">Foundation</p> <br />
                        <p className="description-custom-gray">Business Summary</p> <br />
                        <p className="description-custom-gray">Main Products</p> <br />
                        <p className="description-custom-gray">Location</p>
                    </div>
                    <div className="col-md-4">
                        <p className="description-custom">July 2012</p> <br />
                        <p className="description-custom">Marketing and research of Vietnam Market</p> <br /><br />
                        <p className="description-custom">Pocky</p> <br /><br />
                        <p className="description-custom">Ho Chi Minh City</p>
                    </div>
                    <div className="col-md-3">
                        <img alt="Vietnam" src="https://www.glico.com/assets/materials/pic_global_photo_04.jpg" width="270" /> <br />
                    </div>
                </div> <br /><br /><br /><br />
            </div>
        </div>
    );
  }
}

export default Vietnam;

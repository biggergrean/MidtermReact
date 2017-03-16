import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class Korea extends Component {
  render() {
    return (
        <div className="section"> <br /><br /><br />
            <div className="section-white container">
                <div className="row">
                    <div className="title-area"> <br /><br />
                        <h2>Korea</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h4 className="glico-color"><b>Korea Glico-Haitai Co., Ltd.</b></h4> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1">
                        <p className="description-custom-gray">Foundation</p> <br />
                        <p className="description-custom-gray">Business Summary</p> <br />
                        <p className="description-custom-gray">Capital Fund</p> <br />
                        <p className="description-custom-gray">Main Products</p> <br />
                        <p className="description-custom-gray">Location</p>
                    </div>
                    <div className="col-md-4">
                        <p className="description-custom">September 2011</p> <br />
                        <p className="description-custom">Manufacturing and distribution of Pocky</p> <br /><br />
                        <p className="description-custom">10 billion Won (Ezaki Glico make a 60% investment)</p> <br /><br />
                        <p className="description-custom">Pocky</p> <br /><br />
                        <p className="description-custom">Seoul</p>
                    </div>
                    <div className="col-md-3">
                        <img alt="Korea" src="https://www.glico.com/assets/materials/pic_global_photo_08.jpg" width="270" /> <br />
                    </div>
                </div> <br /><br /><br /><br />
            </div>
        </div>
    );
  }
}

export default Korea;

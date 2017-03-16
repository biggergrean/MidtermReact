import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class France extends Component {
  render() {
    return (
        <div className="section"> <br /><br /><br />
            <div className="section-white container">
                <div className="row">
                    <div className="title-area"> <br /><br />
                        <h2>France</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h4 className="glico-color"><b>Generale Biscuit Glico France S.A.</b></h4> <br />
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
                        <p className="description-custom">March 1982</p> <br />
                        <p className="description-custom">Manufacturing and distribution of Mikado</p> <br /><br />
                        <p className="description-custom">1,525 thousand Euro (Ezaki Glico make a 50% investment)</p> <br />
                        <p className="description-custom">Mikado</p> <br /><br />
                        <p className="description-custom">Clamart</p>
                    </div>
                    <div className="col-md-3">
                        <img alt="France" src="https://www.glico.com/assets/materials/pic_global_photo_09.jpg" width="270" /> <br />
                    </div>
                </div> <br /><br /><br /><br />
            </div>
        </div>
    );
  }
}

export default France;

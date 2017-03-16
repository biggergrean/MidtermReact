import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class Canada extends Component {
  render() {
    return (
        <div className="section"> <br /><br /><br />
            <div className="section-white container">
                <div className="row">
                    <div className="title-area"> <br /><br />
                        <h2>Canada</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h4 className="glico-color"><b>Glico Canada Corporation</b></h4> <br />
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
                        <p className="description-custom">May 1987</p> <br />
                        <p className="description-custom">Manufacturing and distribution of snacks and chocolates</p> <br />
                        <p className="description-custom">CA$10,000 (Ezaki Glico make a 48% investment)</p> <br /><br />
                        <p className="description-custom">Pocky, PRETZ, Pejoy, Glico curry</p> <br /><br />
                        <p className="description-custom">Vancouver <br />
                        Contact us: info@glicocanada.com</p>
                    </div>
                    <div className="col-md-3">
                        <img alt="Canada" src="https://www.glico.com/assets/materials/pic_global_photo_11.jpg" width="270" /> <br />
                    </div>
                </div> <br /><br /><br /><br />
            </div>
        </div>
    );
  }
}

export default Canada;

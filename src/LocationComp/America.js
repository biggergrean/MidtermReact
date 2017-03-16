import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class America extends Component {
  render() {
    return (
        <div className="section"> <br /><br /><br />
            <div className="section-white container">
                <div className="row">
                    <div className="title-area"> <br /><br />
                        <h2>America</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h4 className="glico-color"><b>Ezaki Glico USA Corporation</b></h4> <br />
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
                        <p className="description-custom">February 2003</p> <br />
                        <p className="description-custom">Manufacturing and distribution of snacks and chocolates</p> <br />
                        <p className="description-custom">$10,000 (Ezaki Glico make a 100% investment)</p> <br /><br />
                        <p className="description-custom">Pocky, PRETZ, Pejoy</p> <br /><br />
                        <p className="description-custom">Irvine city</p>
                    </div>
                    <div className="col-md-3">
                        <img alt="America" src="https://www.glico.com/assets/materials/pic_global_photo_10.jpg" width="270" /> <br />
                    </div>
                </div> <br /><br /><br /><br />
            </div>
        </div>
    );
  }
}

export default America;

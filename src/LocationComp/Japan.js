import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class Japan extends Component {
  render() {
    return (
        <div className="section"> <br /><br /><br />
            <div className="section-white container">
                <div className="row">
                    <div className="title-area"> <br /><br />
                        <h2>Japan</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h4 className="glico-color"><b>Ezaki Glico Co.,Ltd.</b></h4> <br />
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
                        <p className="description-custom">Febr /uary 11, 1922</p> <br />
                        <p className="description-custom">Confectionaery,Foods Production and sales</p> <br /><br />
                        <p className="description-custom">7,773 million Yen</p> <br /><br />
                        <p className="description-custom">Confectioneries, Frozen desserts, Dairy products, Processed foods products etc.,</p> <br />
                        <p className="description-custom">Osaka-shi, Osaka</p>
                    </div>
                    <div className="col-md-3">
                        <img alt="Japan" src="https://www.glico.com/assets/materials/pic_global_photo_12.jpg" width="270" /> <br />
                    </div>
                </div> <br /><br /><br /><br />
            </div>
        </div>
    );
  }
}

export default Japan;

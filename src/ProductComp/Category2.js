import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class Category2 extends Component {
  render() {
    return (
        <div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8"> <br />
                        <h4><b>2.Ice Cream and Ice Products</b></h4> <br />
                        <h4><b>Tasteful Excitement in Every Single Bite</b></h4> <br />
                        <h4><b>Enjoy the Variety of Forms and Tastes</b></h4> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-5">
                        <p className="description-custom">
                        Glico ice cream and ice products each feature unique characteristics unmatched by any competitor. Already established in their own market segments are Giant Cone, an ice cream cone topped with nuts and cookie chunks, Papico, sherbet packaged in two single serving sized tubes, and Aisu-no-mi which are bite-sized round sherbet balls. <br />
                        Whether eaten alone, with a friend, or with the whole family, Glico br /and ice cream and ice products have been developed incorporating "Glico-original" ideas to satisfy various consumer needs.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <img alt="Papico" src="https://www.glico.com/assets/images/original/9581" width="270"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8"> <br />
                        <h3>Out of Consideration for Calorie-Counters</h3> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-5">
                        <p className="description-custom">
                        To fulfill the needs of those who count calories but also wish to eat tasty ice cream, Calorie Control Ice combines a low-calorie sweetener and a Tofu-based raw material to make possible a mere 80 kcal per serving. This is yet another example of how Glico spares no effort to support pleasant lifestyles among its customers by offering a br /oad spectrum of innovative ideas.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <img alt="Choco Cunch" src="https://www.glico.com/assets/images/original/9585" width="270"/>
                    </div>
                </div>
        </div>
    );
  }
}

export default Category2;

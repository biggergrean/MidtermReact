import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';
import Header from '../Header';
import Footer from '../Footer';
import Category1 from '../ProductComp/Category1';
import Category2 from '../ProductComp/Category2';
import Category3 from '../ProductComp/Category3';
import Category4 from '../ProductComp/Category4';
import Category5 from '../ProductComp/Category5';
import Category6 from '../ProductComp/Category6';

class Products extends Component {

  state = {
    isCheckedC1: true,
    isCheckedC2: true,
    isCheckedC3: true,
    isCheckedC4: true,
    isCheckedC5: true,
    isCheckedC6: true
  }

  toggleChangeC1 = (event) => {
    if(this.state.isCheckedC1 == true) {
        this.setState({isCheckedC1: false});
    }
    else {
        this.setState({isCheckedC1: true});
    } 
  }

  toggleChangeC2 = (event) => {
    if(this.state.isCheckedC2 == true) {
        this.setState({isCheckedC2: false});
    }
    else {
        this.setState({isCheckedC2: true});
    } 
  }

  toggleChangeC3 = (event) => {
    if(this.state.isCheckedC3 == true) {
        this.setState({isCheckedC3: false});
    }
    else {
        this.setState({isCheckedC3: true});
    } 
  }

  toggleChangeC4 = (event) => {
    if(this.state.isCheckedC4 == true) {
        this.setState({isCheckedC4: false});
    }
    else {
        this.setState({isCheckedC4: true});
    } 
  }

  toggleChangeC5 = (event) => {
    if(this.state.isCheckedC5 == true) {
        this.setState({isCheckedC5: false});
    }
    else {
        this.setState({isCheckedC5: true});
    } 
  }

  toggleChangeC6 = (event) => {
    if(this.state.isCheckedC6 == true) {
        this.setState({isCheckedC6: false});
    }
    else {
        this.setState({isCheckedC6: true});
    } 
  }

  render() {

    var setComponent = [];

    if(this.state.isCheckedC1 == true ) {
        setComponent.push(<Category1 />);
    }
    if(this.state.isCheckedC2 == true ) {
        setComponent.push(<Category2 />);
    }
    if(this.state.isCheckedC3 == true ) {
        setComponent.push(<Category3 />);
    }
    if(this.state.isCheckedC4 == true ) {
        setComponent.push(<Category4 />);
    }
    if(this.state.isCheckedC5 == true ) {
        setComponent.push(<Category5 />);
    }
    if(this.state.isCheckedC6 == true ) {
        setComponent.push(<Category6 />);
    }

    return (
    <div>
        <Header cssFilter="parallax filter filter-gradient-black" cssImg="image bg-img-products" headText="Products of" />

        <div className="section"> <br /><br /><br />
            <div className="section-white container">
                <div className="row">
                    <div className="title-area"> <br /><br />
                        <h2 className="glico-color">Products</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3">
                        <center>
                            <section>
                                <input type="checkbox" checked={this.state.isCheckedC1} onChange={this.toggleChangeC1} />
                                <p>1. Confectioneries</p>
                            </section>
                        </center>
                    </div>
                    <div className="col-md-4">
                        <center>
                            <section>
                                <input type="checkbox" checked={this.state.isCheckedC2} onChange={this.toggleChangeC2} />
                                <p>2. Ice Cream and Ice Products</p>
                            </section>
                        </center>
                    </div>
                    <div className="col-md-3">
                        <center>
                            <section>
                                <input type="checkbox" checked={this.state.isCheckedC3} onChange={this.toggleChangeC3} />
                                <p>3. Processed Food Products</p>
                            </section>
                        </center>
                    </div>   
                </div>
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3">
                        <center>
                            <section>
                                <input type="checkbox" checked={this.state.isCheckedC4} onChange={this.toggleChangeC4} />
                                <p>4. Dairy Products/Desserts</p>
                            </section>
                        </center>
                    </div>
                    <div className="col-md-4">
                        <center>
                            <section>
                                <input type="checkbox" checked={this.state.isCheckedC5} onChange={this.toggleChangeC5} />
                                <p>5. Baby Formula</p>
                            </section>
                        </center>
                    </div>
                    <div className="col-md-3">
                        <center>
                            <section>
                                <input type="checkbox" checked={this.state.isCheckedC6} onChange={this.toggleChangeC6} />
                                <p>6. Food Ingredients and Fine Chemicals</p>
                            </section>
                        </center>
                    </div>   
                </div>

                {setComponent}

                <br /><br /><br />
            </div> <br /><br /><br />
        </div>
        
        <Footer />
    </div>
    );
  }
}

export default Products;

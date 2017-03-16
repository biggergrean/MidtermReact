import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';
import Header from '../Header';
import Footer from '../Footer';
import America from '../LocationComp/America';
import Canada from '../LocationComp/Canada';
import China from '../LocationComp/China';
import France from '../LocationComp/France';
import Indonesia from '../LocationComp/Indonesia';
import Japan from '../LocationComp/Japan';
import Korea from '../LocationComp/Korea';
import Malaysia from '../LocationComp/Malaysia';
import Thailand from '../LocationComp/Thailand';
import Vietnam from '../LocationComp/Vietnam';

class Locations extends Component {

  state = {
    getValue: ''
  }

  handleStringValue = (event) => {
    this.setState({getValue:event.target.value});
  }

  render() {

    var setComponent = [];

    if(this.state.getValue == "America") {
        setComponent.push(<America />);
    }
    if(this.state.getValue == "Canada") {
        setComponent.push(<Canada />);
    }
    if(this.state.getValue == "China") {
        setComponent.push(<China />);
    }
    if(this.state.getValue == "France") {
        setComponent.push(<France />);
    }
    if(this.state.getValue == "Indonesia") {
        setComponent.push(<Indonesia />);
    }
    if(this.state.getValue == "Japan") {
        setComponent.push(<Japan />);
    }
    if(this.state.getValue == "Korea") {
        setComponent.push(<Korea />);
    }
    if(this.state.getValue == "Malaysia") {
        setComponent.push(<Malaysia />);
    }
    if(this.state.getValue == "Thailand") {
        setComponent.push(<Thailand />);
    }
    if(this.state.getValue == "Vietnam") {
        setComponent.push(<Vietnam />);
    }
    if(this.state.getValue == "Show All") {
        setComponent.push(<America />);
        setComponent.push(<Canada />);
        setComponent.push(<China />);
        setComponent.push(<France />);
        setComponent.push(<Indonesia />);
        setComponent.push(<Japan />);
        setComponent.push(<Korea />);
        setComponent.push(<Malaysia />);
        setComponent.push(<Thailand />);
        setComponent.push(<Vietnam />);
    }

    return (
    <div>
        <Header cssFilter="parallax filter filter-gradient-black" cssImg="image bg-img-locations" headText="Global Locations of" />

        <div className="section"> <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-3">
                        <h3 className="glico-color"><b>Please Select Country : </b></h3> <br />
                    </div>
                    <div className="col-md-6">
                        <select className="soflow-color" onChange={this.handleStringValue} value={this.state.getValue}>
                            <option>Select Country</option>
                            <option>America</option>
                            <option>Canada</option>
                            <option>China</option>
                            <option>France</option>
                            <option>Indonesia</option>
                            <option>Japan</option>   
                            <option>Korea</option>
                            <option>Malaysia</option>
                            <option>Thailand</option>
                            <option>Vietnam</option>
                            <option>Show All</option>
                        </select>
                    </div>
                </div>
            </div> <br />
        </div>

        {setComponent}
        
        <div className="section">
            <br /><br /><br />
        </div>
        
        <Footer />
    </div>
    );
  }
}

export default Locations;

import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';
import Header from '../Header';
import Footer from '../Footer';

class Philosophy extends Component {
  render() {
    return (
    <div>
        <Header cssFilter="parallax filter filter-gradient-black" cssImg="image bg-img-philosophy" headText="Philosophy of" />

        <div className="section"> <br /><br /><br />
            <div className="section-white container">
                <div className="row">
                    <div className="title-area"> <br /><br />
                        <h2 className="glico-color">Philosophy</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h3>Always and Forever</h3>
                        <h3>- Striving for Maximum Tastefulness and Wellbeing</h3> <br />
                        <h4><b>The Philosophy of Glico</b></h4> <br /><br />
                        <center>
                        <img alt="Philosophy1" src="https://www.glico.com/assets/images/original/8897" width="700"/> <br /><br /><br />
                        <h6><b>Be inspired by tastefulness!</b></h6>
                        <h6><b>Provide delight through wholesomeness!</b></h6>
                        <h6><b>Glory in the resplendence of life!</b></h6> <br />
                        <h6>At Glico,</h6>
                        <h6>we are inspired to contribute</h6>
                        <h6>to a tastefully wholesome delight</h6>
                        <h6>in the resplendence of human life.</h6> <br /><br />
                        <img alt="Philosophy2" src="https://www.glico.com/assets/images/original/8901" width="700"/> <br />
                        </center>
                        <h4><b>The Glico Spirit</b></h4> <br /><br />
                        <center>
                        <img alt="Spirit" src="https://www.glico.com/assets/images/original/8905" width="700"/> <br /><br /><br />
                        <h6>Taking full pleasure in innovation,</h6>
                        <h6>Let us boldly undertake all actions.</h6>
                        <h6>Through that which is interesting,</h6>
                        <h6>That which is fresh,</h6> <br />
                        <h6>That which is delightful,</h6> <br />
                        <h6>That which is excellent and</h6> <br />
                        <h6>That which challenges ingenuity.</h6> <br />
                        <h6>We will experience the thrill of the positive.</h6> <br />
                        <h6>Even more, everyone will experience the thrill of the positive.</h6>
                        </center> <br /><br /><br />
                    </div>
                </div>
            </div> <br /><br /><br />
        </div>
        
        <Footer />
    </div>
    );
  }
}

export default Philosophy;

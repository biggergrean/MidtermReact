import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import './css/bootstrap.css';
import './css/gaia.css';

import {Link} from 'react-router';

class Manage extends Component {

  state = {
    pagesValue: 1,
    textValue: ''
  }

  handleFirstPages = (event) => {
    this.setState({pagesValue:0});
  }

  handleTextValue = (event) => {
    this.setState({textValue:event.target.value});
  }

  render() {

    var mergeText = "Hello , " + this.state.textValue;

    var setFirstPages = [];

    if(this.state.pagesValue == 1) {
        setFirstPages.push(
            <div className="section section-header">
                <div className="parallax">
                    <div className="image bg-img-first filter filter-gradient-black">
                        <div className="container">
                            <div className="content">
                                <div className="title-area"> <br /><br /><br />
                                    <p>Enter your name</p> <br />
                                    <input type="text" className="textbox" placeholder="Your name.." value={this.state.textValue} onChange={this.handleTextValue} />
                                    <Link to ="/home">
                                        <span onClick={this.handleFirstPages}>
                                            <button className="button" onClick={() => this.refs.simpleDialog.show()}>Next</button>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
    <div>
        <nav className="navbar navbar-default navbar-transparent navbar-fixed-top" color-on-scroll="200">
            <div className="container">
                <div className="navbar-header">
                    <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar bar1"></span>
                        <span className="icon-bar bar2"></span>
                        <span className="icon-bar bar3"></span>
                    </button>
                    <img className="navbar-brand" src="assets/img/glico_logo.png" height="35" width="80"></img>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right navbar-uppercase">
                        <li>
                            <Link to ="/home">
                                <span onClick={this.handleFirstPages}>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/products">
                                <span onClick={this.handleFirstPages}>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to ="/history">
                                <span onClick={this.handleFirstPages}>History</span>
                            </Link>
                        </li>

                        <li className="dropdown">
                            <a href="#gaia" className="dropdown-toggle" data-toggle="dropdown">
                                <span onClick={this.handleFirstPages}>About Us</span>
                            </a>
                            <ul className="dropdown-menu dropdown-danger">
                                <li>
                                    <Link to ="/president">President</Link>
                                </li>
                                <li>
                                    <Link to ="/philosophy">Philosophy</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link to ="/locations">
                                <span onClick={this.handleFirstPages}>Global Locations</span>
                            </Link>
                        </li>
                        <li className="dropdown">
                            <a href="#gaia" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-share-alt"></i> Share
                            </a>
                            <ul className="dropdown-menu dropdown-danger">
                                <li>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.glico.com/global/" target="_blank"><i className="fa fa-facebook-square"></i> Facebook</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/home?status=Hello%20everyone,%20you%20can%20follow%20Glico%20brand%20at%0ALink1%20%3A%20https%3A//www.glico.com/global/%0ALink2%20%3A%20https%3A//www.facebook.com/GlicoGlobal/%0AThank%20you." target="_blank"><i className="fa fa-twitter"></i> Twitter</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>  
            </div>
        </nav>

        {setFirstPages}

        {this.props.children}

        <SkyLight hideOnOverlayClicked ref="simpleDialog" title={mergeText}>
            Welcome to Glico Global Unofficial Site , You can visit content about Products, History, President, Philosophy and Global Locations of Glico brand in this website. And you can go to another social network of Glico brand such as Facebook, Youtube, Instagram and Twitter.<br /><br />
            Let's enjoy the visit. Thank you :) <br /><br /><br /><br /><br /><br /><br /><br /><br />
            from Website Developer.
        </SkyLight>

    </div>
    );
  }
}

export default Manage;

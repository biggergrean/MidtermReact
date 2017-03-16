import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';
import Header from '../Header';
import Footer from '../Footer';

import {Link} from 'react-router';

class Home extends Component {
  render() {
    return (
    <div>
        <Header cssFilter="parallax filter filter-gradient-gold" cssImg="image bg-img-home" headText="Global Unofficial Site" />

        <div className="section section-our-team-freebie">
            <div className="parallax">
                <div className="container">
                    <div className="content">
                        <div className="team">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="card card-member">
                                                <Link to ="/products">
                                                    <div className="content">
                                                        <img alt="Products" src="https://www.glico.com/assets/images/small/global_product__5.png" height="115"/>
                                                        <h3 className="description">Products</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card card-member">
                                                <Link to ="/philosophy">
                                                    <div className="content">
                                                        <img alt="Philosophy" src="https://www.glico.com/assets/images/small/global_Philosophy__1.png" height="115"/>
                                                        <h3 className="description">Philosophy</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card card-member">
                                                <Link to ="/president">
                                                    <div className="content">
                                                        <img alt="President" src="https://www.glico.com/assets/images/small/global_message__1.png" height="115"/>
                                                        <h3 className="description">Message from the President</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card card-member">
                                                    <Link to ="/locations">
                                                        <div className="content">
                                                            <img alt="Locations" src="https://www.glico.com/assets/images/small/pic_map_02_s_global__1.png" height="115"/>
                                                            <h3 className="description">Global Locations</h3>
                                                        </div>
                                                    </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="card card-member">
                                                        <Link to ="/history">
                                                            <div className="content">
                                                                <img alt="History" src="https://www.glico.com/assets/images/small/global_history__5.png" height="115"/>
                                                                <h3 className="description">History</h3>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="card card-member">
                                                        <a href="https://www.youtube.com/user/glicowebnet" target="_blank">
                                                            <div className="content">
                                                                <img alt="Youtube" src="https://d13yacurqjgara.cloudfront.net/users/256184/screenshots/2681008/youtube-appletv2.gif" height="102"/>
                                                                <h3 className="description">Channel | Glico Japan グリコ公式</h3>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card card-member">
                                                <div className="content"> <br />
                                                    <iframe height="322" width="400" 
                                                    src="https://www.youtube.com/embed/3zp3MwJQnKY">
                                                    </iframe>
                                                    <h3 className="description">プリッツ「DAI語」篇（30秒）グリコCM</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card card-member">
                                                <a href="https://www.instagram.com/glicothailand/" target="_blank">
                                                    <div className="content">
                                                        <img alt="Instagram" src="https://storage.googleapis.com/code-gs.ihouseprd.com/mws_blog/2016/06/shutterstock_427201204-2-2.jpg" height="115"/>
                                                        <h3 className="description">Instagram | Glico Thailand</h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card card-member">
                                                <a href="https://www.facebook.com/GlicoGlobal/" target="_blank">
                                                    <div className="content">
                                                        <img alt="Facebook" src="https://www.beartai.com/wp-content/uploads/2016/12/official-facebook-logo-slide.jpg" height="115"/>
                                                        <h3 className="description">Facebook Fanpage | Glico Global</h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card card-member">
                                                <a href="https://twitter.com/glicoprjp" target="_blank">
                                                    <div className="content">
                                                        <img alt="Twitter" src="https://www.seoclerk.com/pics/388502-13kUNS1440064976.png" height="115"/>
                                                        <h3 className="description">Twitter | Glico PR Japan</h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <br />
            </div>
        </div>
        
        <Footer />
    </div>
    );
  }
}

export default Home;

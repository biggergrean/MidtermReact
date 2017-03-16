import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/gaia.css';

class Footer extends Component {
  render() {
    return (
    <footer className="footer footer-color-white" data-color="black">
        <div className="copyright">
                 Copyright©<script> document.write(new Date().getFullYear()) </script> Supachai Lertnapakard, Supanut Permpoon and Mean Keansung. All rights reserved.
        </div>
    </footer>
    );
  }
}

export default Footer;

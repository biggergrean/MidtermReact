import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';
import Header from '../Header';
import Footer from '../Footer';
import AD1919 from '../HistoryComp/1919AD';
import AD1921 from '../HistoryComp/1921AD';
import AD1922 from '../HistoryComp/1922AD';
import AD1925 from '../HistoryComp/1925AD';
import AD1927 from '../HistoryComp/1927AD';
import AD1931 from '../HistoryComp/1931AD';
import AD1932 from '../HistoryComp/1932AD';
import AD1933 from '../HistoryComp/1933AD';
import AD1934 from '../HistoryComp/1934AD';
import AD1935 from '../HistoryComp/1935AD';
import AD1937 from '../HistoryComp/1937AD';
import AD1945 from '../HistoryComp/1945AD';
import AD1950 from '../HistoryComp/1950AD';
import AD1951 from '../HistoryComp/1951AD';
import AD1953 from '../HistoryComp/1953AD';
import AD1955 from '../HistoryComp/1955AD';
import AD1956 from '../HistoryComp/1956AD';
import AD1957 from '../HistoryComp/1957AD';
import AD1958 from '../HistoryComp/1958AD';
import AD1959 from '../HistoryComp/1959AD';
import AD1960 from '../HistoryComp/1960AD';
import AD1961 from '../HistoryComp/1961AD';
import AD1962 from '../HistoryComp/1962AD';
import AD1963 from '../HistoryComp/1963AD';
import AD1966 from '../HistoryComp/1966AD';
import AD1967 from '../HistoryComp/1967AD';
import AD1969 from '../HistoryComp/1969AD';
import AD1970 from '../HistoryComp/1970AD';
import AD1972 from '../HistoryComp/1972AD';
import AD1973 from '../HistoryComp/1973AD';
import AD1976 from '../HistoryComp/1976AD';
import AD1978 from '../HistoryComp/1978AD';
import AD1979 from '../HistoryComp/1979AD';
import AD1982 from '../HistoryComp/1982AD';
import AD1985 from '../HistoryComp/1985AD';
import AD1986 from '../HistoryComp/1986AD';
import AD1988 from '../HistoryComp/1988AD';
import AD1989 from '../HistoryComp/1989AD';
import AD1992 from '../HistoryComp/1992AD';
import AD1995 from '../HistoryComp/1995AD';
import AD1996 from '../HistoryComp/1996AD';
import AD1997 from '../HistoryComp/1997AD';
import AD1998 from '../HistoryComp/1998AD';
import AD1999 from '../HistoryComp/1999AD';
import AD2000 from '../HistoryComp/2000AD';
import AD2001 from '../HistoryComp/2001AD';
import AD2002 from '../HistoryComp/2002AD';
import AD2003 from '../HistoryComp/2003AD';
import AD2004 from '../HistoryComp/2004AD';
import AD2005 from '../HistoryComp/2005AD';
import AD2007 from '../HistoryComp/2007AD';
import AD2008 from '../HistoryComp/2008AD';
import AD2009 from '../HistoryComp/2009AD';
import AD2010 from '../HistoryComp/2010AD';
import AD2011 from '../HistoryComp/2011AD';
import AD2012 from '../HistoryComp/2012AD';
import AD2013 from '../HistoryComp/2013AD';
import AD2014 from '../HistoryComp/2014AD';

class History extends Component {

  state = {
    minValue: 1919,
    maxValue: 2014,
    step: 1,
    currentValue: 1919
  }

  handleStringValue = (event) => {
    this.setState({currentValue:event.target.value});
  }

  render() {

    var setComponent = [];

    for(var thisValue = 1919 ; thisValue <= this.state.currentValue ; thisValue++ ) {
        if(thisValue == 1919) {
            setComponent.push(<AD1919 />);
        }
        if(thisValue == 1921) {
            setComponent.push(<AD1921 />);
        }
        if(thisValue == 1922) {
            setComponent.push(<AD1922 />);
        }
        if(thisValue == 1925) {
            setComponent.push(<AD1925 />);
        }
        if(thisValue == 1927) {
            setComponent.push(<AD1927 />);
        }
        if(thisValue == 1931) {
            setComponent.push(<AD1931 />);
        }
        if(thisValue == 1932) {
            setComponent.push(<AD1932 />);
        }
        if(thisValue == 1933) {
            setComponent.push(<AD1933 />);
        }
        if(thisValue == 1934) {
            setComponent.push(<AD1934 />);
        }
        if(thisValue == 1935) {
            setComponent.push(<AD1935 />);
        }
        if(thisValue == 1937) {
            setComponent.push(<AD1937 />);
        }
        if(thisValue == 1945) {
            setComponent.push(<AD1945 />);
        }
        if(thisValue == 1950) {
            setComponent.push(<AD1950 />);
        }
        if(thisValue == 1951) {
            setComponent.push(<AD1951 />);
        }
        if(thisValue == 1953) {
            setComponent.push(<AD1953 />);
        }
        if(thisValue == 1955) {
            setComponent.push(<AD1955 />);
        }
        if(thisValue == 1956) {
            setComponent.push(<AD1956 />);
        }
        if(thisValue == 1957) {
            setComponent.push(<AD1957 />);
        }
        if(thisValue == 1958) {
            setComponent.push(<AD1958 />);
        }
        if(thisValue == 1959) {
            setComponent.push(<AD1959 />);
        }
        if(thisValue == 1960) {
            setComponent.push(<AD1960 />);
        }
        if(thisValue == 1961) {
            setComponent.push(<AD1961 />);
        }
        if(thisValue == 1962) {
            setComponent.push(<AD1962 />);
        }
        if(thisValue == 1963) {
            setComponent.push(<AD1963 />);
        }
        if(thisValue == 1966) {
            setComponent.push(<AD1966 />);
        }
        if(thisValue == 1967) {
            setComponent.push(<AD1967 />);
        }
        if(thisValue == 1969) {
            setComponent.push(<AD1969 />);
        }
        if(thisValue == 1970) {
            setComponent.push(<AD1970 />);
        }
        if(thisValue == 1972) {
            setComponent.push(<AD1972 />);
        }
        if(thisValue == 1973) {
            setComponent.push(<AD1973 />);
        }
        if(thisValue == 1976) {
            setComponent.push(<AD1976 />);
        }
        if(thisValue == 1978) {
            setComponent.push(<AD1978 />);
        }
        if(thisValue == 1979) {
            setComponent.push(<AD1979 />);
        }
        if(thisValue == 1982) {
            setComponent.push(<AD1982 />);
        }
        if(thisValue == 1985) {
            setComponent.push(<AD1985 />);
        }
        if(thisValue == 1986) {
            setComponent.push(<AD1986 />);
        }
        if(thisValue == 1988) {
            setComponent.push(<AD1988 />);
        }
        if(thisValue == 1989) {
            setComponent.push(<AD1989 />);
        }
        if(thisValue == 1992) {
            setComponent.push(<AD1992 />);
        }
        if(thisValue == 1995) {
            setComponent.push(<AD1995 />);
        }
        if(thisValue == 1996) {
            setComponent.push(<AD1996 />);
        }
        if(thisValue == 1997) {
            setComponent.push(<AD1997 />);
        }
        if(thisValue == 1998) {
            setComponent.push(<AD1998 />);
        }
        if(thisValue == 1999) {
            setComponent.push(<AD1999 />);
        }
        if(thisValue == 2000) {
            setComponent.push(<AD2000 />);
        }
        if(thisValue == 2001) {
            setComponent.push(<AD2001 />);
        }
        if(thisValue == 2002) {
            setComponent.push(<AD2002 />);
        }
        if(thisValue == 2003) {
            setComponent.push(<AD2003 />);
        }
        if(thisValue == 2004) {
            setComponent.push(<AD2004 />);
        }
        if(thisValue == 2005) {
            setComponent.push(<AD2005 />);
        }
        if(thisValue == 2007) {
            setComponent.push(<AD2007 />);
        }
        if(thisValue == 2008) {
            setComponent.push(<AD2008 />);
        }
        if(thisValue == 2009) {
            setComponent.push(<AD2009 />);
        }
        if(thisValue == 2010) {
            setComponent.push(<AD2010 />);
        }
        if(thisValue == 2011) {
            setComponent.push(<AD2011 />);
        }
        if(thisValue == 2012) {
            setComponent.push(<AD2012 />);
        }
        if(thisValue == 2013) {
            setComponent.push(<AD2013 />);
        }
        if(thisValue == 2014) {
            setComponent.push(<AD2014 />);
        }
    }

    return (
    <div>
        <Header cssFilter="parallax filter filter-gradient-black" cssImg="image bg-img-history" headText="History of" />

        <div className="section"> <br /><br /><br />
            <div className="section-white container">
                <div className="row">
                    <div className="title-area"> <br /><br />
                        <h2 className="glico-color">History</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-1">
                        <center>
                            <h4>1919</h4>
                        </center>
                    </div>
                    <div className="col-md-4">
                        <section className="input-range-margin">
                            <input type="range" value={this.state.currentValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step} onChange={this.handleStringValue}/>
                        </section>
                    </div>
                    <div className="col-md-1">
                        <center>
                            <h4>2014</h4>
                        </center>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <center>
                            <h3 className="glico-color">1919 - {this.state.currentValue}</h3>
                        </center>
                    </div>
                </div> <br />
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h4><b>Steady Growth Through Warm Support</b></h4> <br /><br />
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

export default History;

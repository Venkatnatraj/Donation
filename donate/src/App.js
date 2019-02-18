import React, { Component } from 'react';
import './App.css';
import Progress from 'react-progressbar';
import {connect} from 'react-redux'


class App extends Component {
   onChange =(value)=>{
    console.log('changed', value);
  }
  render() {
    return (
      <div className="App">
        <div className="border">
              <Progress style={{color:" "}} completed={this.props.total} />
              <h4><span style={{color:"Red"}}>Only 3 days left </span>to fund this project.</h4>
              <h4>Join 1 other donors who have already supported this project. Every dollar helps.</h4>  
              <input className="first" prefix="$" placeholder="$ Amount" type="number" step="1" />
              <button className="third">Give Now</button>
              <h5 style={{color:"Deepskyblue"}}><i>
                  <a href="https://www.giveindia.org/?utm_source=SEM&utm_adset=sitelink&utm_ad=home&gclid=Cj0KCQiAzKnjBRDPARIsAKxfTRBSsBLue6EEErV609Ry1f_ca5GxYW0BGpCaQTEmUbJAMJc9e488Ox8aAuEMEALw_wcB"  target="blank">
                  Why give $50?</a></i></h5>
        </div>
          <button className="first">Save for later</button>
          <button className="second">Tell your fiends</button>
      </div>
    );
  }
}



const mapStateToProps = (state)=>{
  return{
    // count:state.count
    total:state.total
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{

  }
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
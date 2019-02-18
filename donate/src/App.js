import React, { Component } from 'react';
import './App.css';
import Progress from 'react-progressbar';
import Tilt from 'react-tilt'
import {connect} from 'react-redux'


class App extends Component {
  constructor(){
    super();
    this.state={
      value:''
    }
  }
  handleChange=(e)=>{
    this.setState({
      value:e.target.value
    })
  }

  render() {
    return (
      <div style={{textJustify:"center"}}>
      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250,textAlign:"center" }} >
          <div className="App">
        
                  <h4 className="back">{this.props.total >=0 ? this.props.total :alert('Donation fulfilled')} Still needed for this project</h4>
              <div className="border">
                  <Progress className="progress" completed={this.props.total/10} />
                  <h4><span style={{color:"Red"}}>Only 3 days left </span>to fund this project.</h4>

                  <h4>Join 1 other donors who have already supported this project. Every dollar helps.</h4> 

                  <input className="first"  placeholder="$ Amount" type="number" onChange={this.handleChange} />
                  <button className="third" onClick={()=>{this.props.remaining(this.state.value)}}>Give Now</button>
                  <h5 style={{color:"Deepskyblue"}}><i>
                      <a href="https://www.giveindia.org/?utm_source=SEM&utm_adset=sitelink&utm_ad=home&gclid=Cj0KCQiAzKnjBRDPARIsAKxfTRBSsBLue6EEErV609Ry1f_ca5GxYW0BGpCaQTEmUbJAMJc9e488Ox8aAuEMEALw_wcB"  target="blank">
                      Why give $50?</a></i></h5>
              </div>           
                  <button className="first"><a href="https://iotrl.io/"  target="blank">Save for later</a></button>
                  <button className="second"><a href="https://iotrl.io/"  target="blank">Tell your fiends</a></button>
        
          </div>
      </Tilt>
      </div>
    );
  }
}



const mapStateToProps = (state)=>{
  return{
    total:state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    remaining:(value)=>dispatch({type:"remain",payload:value})

  }
}

export default connect (mapStateToProps, mapDispatchToProps)(App);

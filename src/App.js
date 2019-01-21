import React, { Component } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Custprofile from './components/Custprofile';
import Orders from './components/Orders';
import URLParser from './utils/URLParser';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      custProfile : null,
      resReceived : false,
    }
    this.showOrder = this.showOrder.bind(this);
    console.log(URLParser.getURL('LOAD_CUST_DETAILS'));
    fetch(URLParser.getURL('LOAD_CUST_DETAILS'))
    .then(response => response.json())
    .then(data => { 
      this.setState({ 
        custProfile : data,
        resReceived : true
      })
    }
  );

  }

  showCustDetail(){
    if(this.state.custProfile){
      return  <Custprofile custDetail={this.state.custProfile}/>
    }else{
      return <div>Receiveing Your Details</div>
    }
  }

  showOrder(){
    if(this.state.custProfile && this.state.custProfile.orders){
      return <Orders orders={this.state.custProfile.orders}/>
    }else{
      return <div>{this.state.resReceived ? 'You have not ordered still':'Gathering your Order History'}</div>
    }
  }

  loadHeader(){
    if(this.state.custProfile){
      return <Myheader profilePic = {this.state.custProfile.picture}/>
    }else{
      return <div>loading...</div>
    }
  }


  render() {
    return (
      <div>
        {this.loadHeader()}
        <div> 
          {this.showCustDetail()}
          {this.showOrder()}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Myheader extends Component {
    static propTypes = {
        profilePic:PropTypes.string
      } 
    
      constructor(props){
        super(props);
        this.state = {
            profilePic : this.props.profilePic || ''
        }
      }
  render() {
    return (
        <header className="ml-md-5 ml-3 mt-md-3 mt-2 mb-2">
          <span>ABC.com</span>
          <img className="profile-img mr-3 mr-md-5" src={this.state.profilePic} width="32" height="32"/>
        </header>
    );
  }
}

export default Myheader;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Custprofile extends Component {
    static propTypes = {
        custDetail:PropTypes.object
      } 
    
      constructor(props){
        super(props);
        this.state = {
          custDetail : this.props.custDetail || {}
        }
      }
      
  render() {
    return (
        
            <form className="ml-md-5 ml-3 mt-md-3 mr-md-5 mr-3 mt-2 border-top">
                <div className="form-group row mb-0">
                    <label className="col-sm-2 col-3 col-form-label text-right">Name:</label>
                    <div className="col-sm-10 col-9 order-price mt-2">
                        {this.state.custDetail.name.first} {this.state.custDetail.name.last}
                    </div>
                </div>
                <div className="form-group row mt-0 mb-0">
                    <label className="col-sm-2 col-3 col-form-label text-right">Email:</label>
                    <div className="col-sm-10 col-9 mt-2">
                        {this.state.custDetail.email}
                    </div>
                </div>
                <div className="form-group row mt-0 mb-0">
                    <label className="col-sm-2 col-3 col-form-label text-right">Company:</label>
                    <div className="col-sm-10 col-9 mt-2">
                        {this.state.custDetail.company}
                    </div>
                </div>
                <div className="form-group row mt-0 mb-0">
                    <label className="col-sm-2 col-3 col-form-label text-right">Phone:</label>
                    <div className="col-sm-10 col-9 mt-2">
                        {this.state.custDetail.phone}
                    </div>
                </div>
                <div className="form-group row mt-0 mb-0">
                    <label className="col-sm-2 col-3 col-form-label text-right">Address:</label>
                    <div className="col-sm-10 col-9 mt-2">
                        {this.state.custDetail.address}
                    </div>
                </div>
                <div className="form-group row mt-0 mb-0">
                    <div className="col-sm-12 mt-2">
                        {this.state.custDetail.about}
                    </div>
                </div>
            </form>
    );
  }
}

export default Custprofile;

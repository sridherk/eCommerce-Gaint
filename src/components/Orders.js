import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

class Orders extends Component {
  static propTypes = {
    orders:PropTypes.array
  } 

  constructor(props){
    super(props);
    this.state = {
      orders : this.props.orders || []
    }
    this.showOrders = this.showOrders.bind(this);
  }
  showOrders(){
    return this.state.orders.map((order, key) => 
         <AccordionItem key={key}>
            <AccordionItemTitle>
              <img src={order.product.picture} width="24" height="24"/> 
              <span className="m-2">{order.product.name}</span>
              <span className="m-2 order-status">{order.product.orderStatus}</span>
            </AccordionItemTitle>
            <AccordionItemBody>
              <div className="clear-fix">
                <img className="order-img mr-2" src={order.product.picture}/>
                <span className="order-price">{order.price}</span><br/>
                <span className="order-time">{order.product.orderDate}</span><br/>
                {order.product.description}
              </div>
            </AccordionItemBody>
          </AccordionItem>
    )
  }

  render() {
    return (
        <div className="ml-md-5 ml-3 mt-md-3 mt-2 mr-3 mr-md-5 border-top">
          <span className="mb-2 order-title">You have Ordered</span>
          <Accordion accordion="false">
            {this.showOrders()} 
          </Accordion>
        </div>
    );
  }
}

export default Orders;

import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price, id } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} your {id} </p>
      </div>
    );
  }
}

export default Order;
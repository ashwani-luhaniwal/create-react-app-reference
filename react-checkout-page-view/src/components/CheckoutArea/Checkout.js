import React, { Component } from 'react';
import OrderSummary from './OrderSummary';
import PaymentForm from './PaymentForm';

/**
 * Checkout component with OrderSummary and PaymentForm
 */
export default class Checkout extends Component {
    render() {
        return (
            <div className="Checkout">
                <OrderSummary duration={this.props.duration} discount={this.props.discount} tax={this.props.tax} price={this.props.price} />
                <PaymentForm onSubmit={this.props.onSubmit} />
            </div>
        );
    }
}
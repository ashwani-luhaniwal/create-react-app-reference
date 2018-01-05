import React from 'react';
import BasicInput from './BasicInput';
import ExpiryDate from './ExpiryDate';
import CheckoutButton from './CheckoutButton';

/**
 * Comple Payment Form component
 */
export default class PaymentForm extends React.Component {
    render() { 
        return (
            <div className="PaymentForm">
                <form onSubmit={this.props.onSubmit}>
                    <div className="Title">Payment information</div>
                    <BasicInput name="name" label="Name on Credit Card" type="text" placeholder="Ashwani Luhaniwal" />
                    <BasicInput name="card" label="Credit Card Number" type="number" placeholder="xxxx xxxx xxxx xxxx" />
                    <ExpiryDate />
                    <CheckoutButton />
                </form>
            </div>
        );
    }
}
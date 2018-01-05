import React from 'react';

/**
 * Checkout Button component
 */
export default class CheckoutButton extends React.Component {
    render() {
        return (
            <div className="CheckoutButton">
                <button>Book securely</button>
                <span><i className="fa fa-fw fa-lock"></i> Your credit card information is encrypted</span>
            </div>
        );
    }
}
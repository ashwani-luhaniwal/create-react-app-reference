import React from 'react';

/**
 * Overlay component
 */
export default class Overlay extends React.Component {
    render() {
        return (
            <div className="Overlay" style={{'backgroundImage': 'url(' + this.props.image + ')'}}>
                Something
            </div>
        );
    }
}
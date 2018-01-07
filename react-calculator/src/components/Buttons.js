import React from 'react';

/**
 * Buttons component
 */
export default class Buttons extends React.Component {
    render() {
        return (
            <div className="Buttons">
                {this.props.children}
            </div>
        );
    }
}
import React from 'react';

/**
 * Main container component for app
 */
export default class Container extends React.Component {
    render() {
        return (
            <div className="Container">
                {this.props.children}
            </div>
        );
    }
}
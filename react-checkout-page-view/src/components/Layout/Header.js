import React from 'react';

/**
 * Header component
 */
export default class Header extends React.Component {
    render() {
        return (
            <header>
                <input onChange={this.props.onChange} type="range" max="100" min="1" step="1" />
            </header>
        );
    }
}
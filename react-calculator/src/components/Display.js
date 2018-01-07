import React from 'react';

/**
 * Display component
 * ------------------
 * We take all values from this.state.operations and concatenate them into a string using the
 * 'join' method. Our render method returns the string wrapped in a <div>
 */
export default class Display extends React.Component {
    render() {
        let str = this.props.data.join('');
        return (
            <div className="Display">
                {str}
            </div>
        );
    }
}
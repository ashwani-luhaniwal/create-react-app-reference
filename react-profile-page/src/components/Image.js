import React from 'react';

/**
 * Image component
 */
export default class Image extends React.Component {
    render() {
        return (
            <div className="Image" style={{backgroundImage: 'url(' + this.props.src + ')'}}></div>
        );
    }
}
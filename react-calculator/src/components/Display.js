import React from 'react';

/**
 * Display component
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
import React from 'react';
import pluralize from 'pluralize';

/**
 * Information component containing workspace information
 */
export default class Information extends React.Component {
    render() {
        var duration = pluralize('day', parseInt(this.props.duration));
        
        return (
            <div className="WorkspaceInformation">
                <div className="WorkspaceName">{this.props.name}</div>
                <div className="WorkspacePrice">
                    <div className="Price">{this.props.price} GBP</div>
                    <div className="Duration">/ {duration}</div>
                </div>
            </div>
        );
    }
}
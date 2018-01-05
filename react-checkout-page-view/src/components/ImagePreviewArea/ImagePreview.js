import React from 'react';
import Information from './Information';
import Meta from './Meta';

/**
 * ImagePreview component contains workspace meta and information
 */
export default class ImagePreview extends React.Component {
    render() {
        return (
            <div className="ImagePreview" style={{'backgroundImage': 'url(' + this.props.image + ')'}}>
                <div className="WorkspaceOverview">
                    <Information name="ITPL, Bangalore" price={this.props.price} duration="1" />
                    <Meta people={this.props.people} />
                </div>
            </div>
        );
    }
}
import React from 'react';
import ListToggle from './ListToggle';

/**
 * Title List Item component
 */
export default class Item extends React.Component {
    render() {
        return (
            <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}}>
                <div className="overlay">
                    <div className="title">{this.props.title}</div>
                    <div className="rating">{this.props.score}</div>
                    <div className="plot">{this.props.overview}</div>
                    <ListToggle />
                </div>
            </div>
        );
    }
}
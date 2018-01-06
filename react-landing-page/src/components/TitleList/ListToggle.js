import React from 'react';

/**
 * List Toggle component
 */
export default class ListToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        };
        this.handleClicked = this.handleClicked.bind(this);
    }
    handleClicked() {
        if (this.state.toggled === true) {
            this.setState({ toggled: false });
        } else {
            this.setState({ toggled: true });
        }
    }
    render() {
        return (
            <div onClick={this.handleClicked} data-toggled={this.state.toggled} className="ListToggle">
                <div>
                    <i className="fa fa-fw fa-plus"></i>
                    <i className="fa fa-fw fa-check"></i>
                </div>
            </div>
        );
    }
}
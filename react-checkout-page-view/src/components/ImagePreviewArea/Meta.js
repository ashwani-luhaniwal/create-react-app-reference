import React from 'react';
import pluralize from 'pluralize';

/**
 * Meta component containing workspace meta information
 */
export default class Meta extends React.Component {
    render() {
        var people = pluralize('person', this.props.people);

        return (
            <div className="WorkspaceMeta">
                <div className="Description">Entire office for <strong>{people}</strong></div>
                <div className="Dates"><strong>Mon, Aug 22, 2016</strong> to <strong>Fri, Aug 29, 2016</strong></div>
            </div>
        );
    }
}
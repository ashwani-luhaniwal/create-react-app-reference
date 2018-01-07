import React from 'react';

/**
 * Weather Icon component
 */
export default class WeatherIcon extends React.Component {
    render() {
        let timeOfDay = (this.props.timeOfDay > 7 && this.props.timeOfDay < 18) ? 'day' : 'night';
        let className = 'WeatherIcon wi ';
        className += 'wi-owm-' + timeOfDay + '-' + this.props.weatherCode;
        return (
            <i className={className}></i>
        );
    }
}
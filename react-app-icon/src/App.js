import React from 'react';
import WeatherIcon from './components/WeatherIcon';
import './App.css';

export default class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 1,
            icon: '',
            location: '',
            temp: '',
            weather_code: '',
        };
        this.fetchWeatherData = this.fetchWeatherData.bind(this);
        this.fetchIP = this.fetchIP.bind(this);
    }
    fetchWeatherData(city) {
        const baseUrl = `http://api.openweathermap.org`;
        const path = `/data/2.5/weather`;
        const appId = `1fbaf6e0d29ea877ae5852504eef4e82`;
        const query = `units=imperial&appId=${appId}`;
        fetch(`${baseUrl}${path}?q=${city}&${query}`)
            .then( (response) => {
                return response.json();
            })
            .then( (data) => {
                let date = new Date();
                let time = date.getHours();
                this.setState({
                    time: time,
                    temp: Math.round(data.main.temp),
                    location: city,
                    weather_code: data.weather[0].id
                });
            })
            .catch( (error) => {
                console.log(error);
            });
    }
    fetchIP() {
        fetch('//freegeoip.net/json/')
            .then( (response) => {
                return response.json();
            })
            .then( (data) => {
                let city = data.city;
                this.fetchWeatherData(city);
            })
            .catch( (error) => {
                console.log(error);
            });
    }
    componentDidMount() {
        this.fetchIP();
    }
    render() {
        return (
            <div className="Icon" data-hour={this.state.time}>
                <div className="Sky"></div>
                <WeatherIcon src={this.state.icon} weatherCode={this.state.weather_code} timeOfDay={this.state.time} />
                <div className="Information">
                    <div className="Location">{this.state.location}</div>
                    <div className="Temperature">{this.state.temp} &deg; F</div>
                </div>
            </div>
        );
    }
}
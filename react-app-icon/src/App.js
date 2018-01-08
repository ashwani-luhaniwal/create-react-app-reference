/**
 * This app displays user's location and weather. The icon's background also animates based on the
 * time of day.
 */

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
    /**
     * ES6 Arrow Functions
     * --------------------
     * The main difference between an arrow function and a regular function in JavaScript is the
     * value of "this".
     * 
     * What is this ?
     * --------------
     * The "this" keyword refers to the context in which a JavaScript function is called/executed.
     * When we say "context" we mean a reference to the object that "owns" the currently executing code.
     * In JavaScript, the value of "this" can be different values in different scenarios. For our 
     * proposes, we are going to look at the value of "this" in our funtion passed into "then" method.
     * 
     * Prior to ES6, the value of "this" in a callback function as we've used them above was
     * "undefined". Using ES6 arrow functions sets "this" to be the current object that we are using.
     */
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
                let time = date.getHours(); // current hour of the day
                this.setState({
                    time: time,
                    temp: Math.round(data.main.temp),   // current weather at current location
                    location: city,
                    weather_code: data.weather[0].id    // code for current weather conditions
                });
            })
            .catch( (error) => {
                console.log(error);
            });
    }
    fetchIP() {
        /**
         * JavaScript fetch API
         * ---------------------
         * Instead of using native XMLHttpRequest object or using jQuery's $.ajax method (wrapper for
         * XMLHttpRequest) we'll use new global fetch method. The fetch method is a cleaner and simpler
         * interface for making AJAX requests and makes use of Promises.
         * 
         * What is Promise ?
         * ------------------
         * A Promise in JavaScript is an object that represents a value that is either available now,
         * in the future or possibly never.
         * When a Promise instance is created, the actual value of the Promise is not necessarily known.
         * Instead of receiving the value back, we'll receive an object that allows us to get access to the
         * actual value when it's available.
         * The Promise pattern allows for asynchronous actions such as AJAX requests in simpler, less
         * mentally challenging callback method.
         * 
         * The "fetch" API and method are not implemented in all browsers yet, so we'll need to use a
         * polyfill to support browsers that do not support the "fetch" API. The create-react-app tool
         * that we have used to bootstrap our application includes this polyfill out of box.
         * 
         * What is a polyfill ?
         * ---------------------
         * Not all browsers support certain features of JavaScript. A polyfill is a library that allows
         * us to use upcoming features of JavaScript in current browsers that don't implement a new 
         * feature already.
         * 
         * The "fetch" method accepts two parameters - the URL that we are requesting, either as a string 
         * or a "Request" object and an "options" object. The "fetch" method returns a Promise instance
         * object.
         */

        /**
         * Every Promise object has two important methods available: the "then" method and "catch"
         * method. The "then" method is what is called when the operation completed successfully.
         * In the case of our AJAX request to freegeoip.net, this is where we handle the data that
         * comes back from the request.
         * 
         * Passed into "then" method is a "Response" object. The "Response" object contains a "json"
         * method which also returns a Promise that resolves with a JSON object. Since the "json"
         * method returns a Promise, we can chain another "then" method and handle the JSON data in
         * the function.
         * 
         * If "fetch" request fails for any reason, we'll want to handle that error. We can handle it
         * using the catch() method on the promise instance.
         */
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
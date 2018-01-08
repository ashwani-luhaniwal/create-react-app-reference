import React from 'react';
import Image from './components/Image';
import Profile from './components/Profile';
import './App.css';

/**
 * Main App component
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: 'Ashwani Luhaniwal',
                biography: '26 year old Designer/Developer living in Stockholm. Originally from India. Love to make stuff.',
            },
            image: 'http://static1.squarespace.com/static/55acc005e4b098e615cd80e2/t/57b057398419c2c454f09924/1471025851733/',
            quote: {
                content: 'Beautiful things don\'t ask for attention',
                source: 'The Secret Life of Walter Mitty'
            }
        };
    }
    render() {
        return (
            <div className="App">
                <Image src={this.state.image} />
                <Profile person={this.state.person} quote={this.state.quote} />
            </div>
        );
    }
}
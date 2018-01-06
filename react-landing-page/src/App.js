import React from 'react';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import UserProfile from './components/UserProfile';
import Hero from './components/Hero/Hero';
import TitleList from './components/TitleList/TitleList';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchUrl: ''
        };
        const apiKey = '87dfa1c669eea853da609d4968d294be';
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleKeyUp(e) {
        if (e.key === 'Enter' && this.state.searchTerm !== '') {
            let searchUrl = 'search/multi?query=' + this.state.searchTerm + '&api_key=' + this.apiKey;
            this.setState({ searchUrl: searchUrl });
        }
    }
    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }
    render() {
        return (
            <div>
                <header className="Header">
                    <Logo />
                    <Navigation />
                    <div id="search" className="Search">
                        <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a titile..." value={this.state.searchTerm} />
                    </div>
                    <UserProfile />
                </header>
                <Hero />
                <TitleList title="Search Results" url={this.state.searchUrl} />
                <TitleList title="Top TV picks for Ashwani" url='discover/tv?sort_by=popularity.desc&page=1' />
                <TitleList title="Trending now" url="discover/movie?sort_by=popularity.desc&page=1" />
                <TitleList title="Most watched in Horror" url="genre/27/movies?sort_by=popularity.desc&page=1" />
                <TitleList title="Sci-Fi greats" url="genre/878/movies?sort_by=popularity.desc&page=1" />
                <TitleList title="Comedy magic" url="genre/35/movies?sort_by=popularity.desc&page=1" />
            </div>
        );
    }
}
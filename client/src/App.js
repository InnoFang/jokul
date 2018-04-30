import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});

        var myFetchOptions = {
            method: 'GET'
        };

        fetch('http://localhost:8080/knockknock/movieinfolist', myFetchOptions)
            .then(response => response.json())
            .then(data => this.setState({movies: data, isLoading: false}));
    }

    render() {

        const {movies, isLoading} = this.state;

        if (isLoading) {
            return <p>is loading...</p>
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <hr />
            </div>
        );
    }
}

export default App;

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


        fetch('http://localhost:8080/knockknock/movieinfolist', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json())
            .then(data => this.setState({movies: data, isLoading: false}));
    }

    render() {

        const {movies, isLoading} = this.state;

        if (isLoading) {
            return <p>is loading...</p>
        }
        for (let i in movies.data) {
            if (movies.data.hasOwnProperty(i)) {
                console.log(movies.data[i])
            }
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

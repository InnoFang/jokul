/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});


        fetch('http://localhost:8080/knockknock/movieinfolist', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors',
        })
            .then(response => response.json())
            .then(info => this.setState({data: info.data, isLoading: false}))
            .catch(error => console.error('Error:', error));
    }

    render() {

        let {data, isLoading} = this.state;
        if (data[0] != null) {
            console.log('hello')
            console.log(data[0].title);
            console.log(data[0].post);
            console.log(data[0].id);
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
                <ul>
                {
                    data.map(d => <li>
                        <div>
                            <h3>{d.title}</h3>
                            <p>{d.overview}</p>
                            <br/>
                            <img src={d.post}/>
                        </div>
                    </li>)
                }
                </ul>
            </div>
        );
    }
}

export default Container;
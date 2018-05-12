/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react';
import {
    Row,
    Col
} from 'antd';
import MovieCard from '../movieCard/MovieCard'
import './MovieList.css'
import Api from '../Api'

class MovieList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch(Api.movieList(0), {
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

        let {data} = this.state;

        if (data[0] == null) {
            return <div></div>;
        }

        return (

            <div className="App">
                <Row >
                    <Col span={24}>
                        <div id="title">
                            <img src={require('../images/JOKUL.png')} alt="logo"/>
                        </div>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col span={3}/>
                    <Col span={4}>
                        <MovieCard {...data[0]}/>
                    </Col>
                    <Col span={1}/>
                    <Col span={4}>
                        <MovieCard {...data[1]}/>
                    </Col>
                    <Col span={1}/>
                    <Col span={4}>
                        <MovieCard {...data[2]}/>
                    </Col>
                    <Col span={1}/>
                    <Col span={4}>
                        <MovieCard {...data[0]}/>
                    </Col>
                    <Col span={3}/>
                </Row>

            </div>
        );
    }
}

export default MovieList;
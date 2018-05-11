/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react';
import {
    Row,
    Col
} from 'antd';
import MovieCard from '../movieCard/MovieCard'
import './Container.css'

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


        fetch('http://localhost:8080/knockknock/movieinfolist/0', {
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

        if (data[0] == null) {
            return <div></div>;
        }
        console.log('hello');
        console.log(data[0].title);
        console.log(data[0].post);
        console.log(data[0].id);
        return (

            <div className="App">
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
                        <MovieCard {...data[1]}/>
                    </Col>
                    <Col span={3}/>
                </Row>

            </div>
        );
    }
}

export default Container;
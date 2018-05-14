/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react';
import {
    Row,
    Col
} from 'antd';
import MovieList from '../movieList/MovieList';
import './Home.css'

class Home extends React.Component {

    render() {
        return (
            <div>
                <Row >
                    <Col span={24}>
                        <div id="title">
                            <img id="bigImg" src={require('../images/JOKUL.png')} alt="logo"/>
                        </div>
                    </Col>
                </Row>
                <br/>
                <br/>
                <MovieList/>
            </div>
        );
    }
}

export default Home;

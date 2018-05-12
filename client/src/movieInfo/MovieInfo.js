/**
 * Created by InnF on 2018/5/11.
 */

import React from 'react'
import {
    Card,
    Col,
    Row
} from 'antd';
import Api from '../Api'
import './MovieInfo.css'

class MovieInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            data: {},
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});


        fetch(Api.movieDetail(this.props.match.params.title), {
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
        const {data} = this.state;
        if (data == null) {
            return <div></div>;
        }
        return (
            <div>
                <Row>
                    <Col span={4}/>
                    <Col span={16}>
                        <Card
                            hoverable
                            style={{width: 240}}
                            cover={<img alt="post" src={data.post}/>}/>
                    </Col>
                    <Col span={4}/>
                </Row>
            </div>

        );
    }
}

export default MovieInfo;
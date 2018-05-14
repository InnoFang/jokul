/**
 * Created by InnF on 2018/5/12.
 */

import React from 'react'
import {
    Col,
    Row,
    message
} from 'antd';
import {
    Player,
    LoadingSpinner,
    BigPlayButton
} from 'video-react';

import './MoviePlay.css'
import Api from '../Api'

class MoviePlay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            src: '',
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        const hide = message.loading('视频资源正在加载，请稍后', 0);
        fetch(Api.playMovie(this.props.match.params.movie), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors',
        })
            .then(response => response.json())
            .then(req => {
                if (req.status != 1) {
                    message.error('视频资源获取失败', 10);
                } else {
                    message.success('视频资源加载成功');
                    this.setState({src: req.data, isLoading: false})
                }
                setTimeout(hide, 1);
            })
            .catch(error => console.error('Error:', error));
    }

    render() {
        const {src} = this.state;
        const source = src === '' ? 'cannot play this movie :(' : src;
        console.log(source);
        return (
            <div>
                <Row>
                    <Col span={4}/>
                    <Col span={5}>
                        <h1>{this.props.match.params.movie}</h1>
                        <hr/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}/>
                    <Col span={18}>
                        <Player src={source}>
                            <LoadingSpinner />
                            <BigPlayButton position="center" />
                        </Player>
                        {/*{https://media.w3.org/2010/05/sintel/trailer_hd.mp4}*/}

                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>

        );
    }
}

export default MoviePlay;
/**
 * Created by InnF on 2018/5/12.
 */

import React from 'react'
import {
    Col,
    Row,
    message,
    Button,
    Tooltip
} from 'antd';
import {
    Player,
    LoadingSpinner,
    BigPlayButton
} from 'video-react';

import './MoviePlay.css'
import Api from '../Api'

/*
* 电影播放页面
* */
class MoviePlay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            src: '',
            isLoading: true,
            text: '点击下载该电影'
        }
    }

    /*
     * 在组件在家完成后调用，加载电影资源
     * */
    componentDidMount() {
        this.setState({isLoading: true});
        /* 开始播放电影前需要加载资源，此为加载提示 */
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
                setTimeout(hide, 1);
                if (req.status !== 1) {
                    message.error('视频资源获取失败', 10);
                } else {
                    message.success('视频资源加载成功');
                    this.setState({src: req.data, isLoading: false})
                }
            })
            .catch(error => console.error('Error:', error));
    }

    render() {
        const {src, text} = this.state;
        const source = src === '' ? '' :
            <Tooltip placement="right" title={text}>
                <a href={src}>
                    <Button icon="download" size="large" shape="circle"/>
                </a>
            </Tooltip>;
        return (
            <div>
                <Row>
                    <Col span={4}/>
                    <Col span={5}>
                        <h1>{this.props.match.params.movie}</h1>
                        <hr/>
                        {source}
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}/>
                    <Col span={18}>
                        <Player src={src}>
                            <LoadingSpinner />
                            <BigPlayButton position="center"/>
                        </Player>
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
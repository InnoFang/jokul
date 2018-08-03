/**
 * Created by InnF on 2018/5/11.
 */

import React from 'react'
import {
    Col,
    Row,
    Button,
    Popover
} from 'antd';

import {
    Link
} from 'react-router-dom'

import Api from '../Api'
import './MovieInfo.css'

/*
* 电影详细信息展示
* 包括
* 海报、电影名、评分、别名、发行日期、时长、导演、编剧、概览、电影类型等
* */
class MovieInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: false
        }
    }

    /*
    * 该组件刚加载完成后，向后台请求该电影的详细信息
    * */
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

        const play = (<div id="play">
            <Link to={`/play/${this.props.match.params.title}`}>
                <Button type="primary" icon="play-circle-o" size="large">
                    点击播放
                </Button>
            </Link>
        </div>);

        return (
            <div>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col span={4}/>
                    <Col span={5}>
                        <div>
                            <img id="post" alt="post" src={data.post}/>
                            {play}
                        </div>
                    </Col>
                    <Col span={1}/>
                    <Col span={5}>
                        <h1>{data.title}</h1>
                        <hr/>
                        <p>豆瓣频分：<span id="score">{data.score}</span></p>
                        <p>导演：{data.director}</p>
                        <p>编剧：{data.screenwriter}</p>
                        <p>别名：{data.alias}</p>
                        <p>上映日期：{data.releaseDate}</p>
                        <p>类型：{data.type}</p>
                        <p>片长：{data.length}分钟</p>
                        <Popover content={data.cast} title="演员信息" trigger="hover">
                            <Button type="primary" ghost>演员信息</Button>
                        </Popover>
                    </Col>
                    <Col span={1}/>
                    <Col span={5} id="overview">
                        <h1>剧情</h1>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;{data.overview}</p>
                    </Col>
                    <Col span={4}/>
                </Row>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>

        );
    }
}

export default MovieInfo;
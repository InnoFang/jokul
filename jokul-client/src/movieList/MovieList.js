/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react';
import {
    Row,
    Col,
    Pagination
} from 'antd';

import MovieCard from '../movieCard/MovieCard'
import './MovieList.css'
import Api from '../Api'

/*
* 一列
* 其实是一个包装了的单个电影卡片
* 用于之后行的包装
* */
function ACol(props) {
    return (
        <div>
            <Col span={1}/>
            <Col span={4}>
                <MovieCard key={props.movie.title} {...props.movie}/>
            </Col>
        </div>
    )
}

/*
* 电影列表行
* 使用分行分列的简单算法
* 将单个电影卡片，以一行 4 个进行组合
* 一共 4 行，组成一页
* 一页最多 12 个数据
* */
function Rows(props) {
    let cols = [];
    const rows = [];
    for (let i = 0; i < props.movies.length; i++) {
        if (i % 4 === 0) {
            cols.push(<Col span={3}/>);
            rows.push(<Row key={i}>{cols.map(c => c)}</Row>);
            cols = [];
            cols.push(<Col span={2}/>);
        }
        cols.push(<ACol movie={props.movies[i]}/>);
    }
    rows.push(cols.map(c => c));
    return <div>{rows.map(r => <div><br/>{r}</div>)}</div>;
}

/*
* 电影列表
* */
class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            count: 0
        }
    }

    /*
    * 该组件刚加载完成后
    * 向后台发送请求
    * 分页获取所有电影列表以及获取当前页的电影数量
    * 获取数量用来做分行分列处理
    * */
    componentDidMount() {
        this.fetchDataCount();
        this.fetchData(0);
    }

    /*
    * 处理换页请求
    * */
    onPageChange(pageNumber) {
        console.log('Page: ', pageNumber);
        this.fetchData(pageNumber - 1);
    }

    /*
    * 分页后再次向后台发送请求，获取当前页的电影数量
    * */
    fetchDataCount() {
        // 获取电影数量 get movie count
        fetch(Api.movieCount(), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors',
        })
            .then(response => response.json())
            .then(info => this.setState({count: info.data}))
            .catch(error => console.error('Error:', error));
    }

   /*
    * 分页后再次向后台发送请求，获取电影列表
    * */
    fetchData(page) {
        // 获取电影信息列表 get movie info list
        fetch(Api.movieList(page), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/js on',
            },
            mode: 'cors',
        })
            .then(response => response.json())
            .then(info => this.setState({data: info.data}))
            .catch(error => console.error('Error:', error));
    }

    render() {

        let {data, count} = this.state;

        if (data[0] == null || count == null) {
            return <div></div>;
        }

        return (
            <div>
                <Row>
                    <Rows key="movie-list" movies={data}/>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col span={24} id="pagination">
                        <Pagination defaultCurrent={1} total={count} pageSize={12}
                                    onChange={this.onPageChange.bind(this)}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default MovieList;
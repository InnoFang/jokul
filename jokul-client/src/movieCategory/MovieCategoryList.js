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
            cols.push(<Col key={`col${i}`} span={3}/>);
            rows.push(<Row key={`row${i}`}>{cols.map(c => c)}</Row>);
            cols = [];
            cols.push(<Col key={`col${i + 1}`} span={2}/>);
        }
        cols.push(<ACol key={`ACol${i}`} movie={props.movies[i]}/>);
    }
    rows.push(cols.map(c => c));
    return <div>{rows.map(r => <div><br/>{r}</div>)}</div>;
}

/*
* 单个分类的电影列表
* */
class MovieCategoryList extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            count: 0
        }
    }

    /*
    * 该组件刚加载完成时，向后台发送该类别的电影列表
    * */
    componentDidMount() {
        console.log("component did mount is called");
        this.fetchDataCount(this.props.match.params.type);
        this.fetchData(this.props.match.params.type, 0);
    }

    /*
    * 利用 React 的生命周期方法
    * 组件加载完成后，就不会再调用 componentDidMount 方法了
    * 但是每次再次加载时，还是会调用该方法
    * 使用该方法进行该类别的电影列表请求
    * */
    componentWillReceiveProps(nextProps) {
        this.setState({data: [], count: 0});
        this.fetchDataCount(nextProps.match.params.type);
        this.fetchData(nextProps.match.params.type, 0);
        // console.log("componentWillReceiveProps is called" + nextProps.match.params.type);
    }

    /*
    * 处理换页请求
    * */
    onPageChange(pageNumber) {
        console.log('Page: ', pageNumber);
        this.fetchData(pageNumber - 1);
    }

    /*
    * 获取某一个类型电影数量
    * */
    fetchDataCount(type) {

        fetch(Api.typeCount(type), {
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
    * 获取该类所有电影
    * */
    fetchData(type, page) {
        fetch(Api.categoryList(type, page), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
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
                    <Rows movies={data}/>
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

export default MovieCategoryList;
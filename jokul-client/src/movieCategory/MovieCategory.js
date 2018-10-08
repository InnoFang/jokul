/**
 * Created by InnF on 2018/5/12.
 */


import React from 'react'
import {
    Col,
    Row,
    Tag
} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Api from '../Api';
import './MovieCategory.css';
import MovieList from '../movieList/MovieList';
import MovieCategoryList from './MovieCategoryList';

/*
* 电影分类
* 包括
* 剧情、喜剧、惊悚、动作、爱情、犯罪、恐怖、冒险、悬疑、科幻、家庭、奇幻、动画、战争、历史、传记、音乐、歌舞、运动、西部、纪录片
* 共 21 个类别
* */
class MovieCategory extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: false,
            selectedTag: '全部'
        }
    }

    /*
    * 该组件刚加载完成后
    * 向后台获取电影分类列表
    * */
    componentDidMount() {
        this.setState({isLoading: true});

        fetch(Api.types(), {
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

    /*
    * 处理点击列表操作
    * 切换点击的类别标签
    * */
    handleClick(tag) {
        this.setState({selectedTag: tag});
    }

    render() {
        const {data} = this.state;
        const {selectedTag} = this.state;

        if (data == null) {
            return <div></div>;
        }

        return (
            <Router>
                <div>
                    <br/>
                    <Row>
                        <Col span={3}/>
                        <Col span={18}>
                            <div>
                                <h3 style={{marginRight: 8, display: 'inline'}}>分类：</h3>
                                <Link to="/category">
                                    <Tag
                                        key={"全部"}
                                        color={selectedTag === "全部" ? "#108ee9" : "geekblue"}
                                        onClick={this.handleClick.bind(this, "全部")}>
                                        {"全部"}
                                    </Tag>
                                </Link>
                                {data.map(tag => (
                                    <Link to={`/category/${tag}`}>
                                        <Tag
                                            key={tag}
                                            color={selectedTag === tag ? "#108ee9" : "geekblue"}
                                            onClick={this.handleClick.bind(this, tag)}> {tag}
                                        </Tag>
                                    </Link>
                                ))}
                            </div>

                        </Col>
                        <Col span={3}/>
                    </Row>
                    <br/>
                    <br/>
                    <div>
                        <Route exact path={`/category/:type`} component={MovieCategoryList}/>
                        <Route exact path="/category" component={MovieList}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
            </Router>

        );
    }
}

export default MovieCategory;
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

class MovieCategory extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: false,
            selectedTag: '全部'
        }
    }

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
                                        color={selectedTag == "全部" ? "#108ee9" : "geekblue"}
                                        onClick={this.handleClick.bind(this, "全部")}>
                                        {"全部"}
                                    </Tag>
                                </Link>
                                {data.map(tag => (
                                    <Link to={`/category/${tag}`}>
                                        <Tag
                                            key={tag}
                                            color={selectedTag == tag ? "#108ee9" : "geekblue"}
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

                        <div>
                            <Route exact path={`/category/:type`} component={MovieCategoryList}/>
                            <Route exact path="/category" component={MovieList}/>
                        </div>

                        {/*{list}*/}
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
/**
 * Created by InnF on 2018/5/8.
 */

import React from 'react'
import {
    Rate
} from 'antd';
import {
    Link
} from 'react-router-dom'

import './MovieCard.css';

/*
* 电影卡片
* 用于电影列表展示
* 展示内容包括：
*   海报
*   豆瓣评分
*   电影名
* */
class MovieCard extends React.Component {

    render() {
        const half = parseInt(this.props.score, 10) % 2 === 1 ? 0.5 : 0;
        const star = parseInt(this.props.score / 2, 10) + half;
        const desc =
            <div id="description">
                <Rate disabled allowHalf value={star}/>{this.props.score}
            </div>;

        return (
            <Link to={`/movieInfo/${this.props.title}`} target='_blank'>
                <div id="figure">
                    <img alt="post" src={this.props.post}/>
                    <div id="figcaption">
                        <h3>{this.props.title}</h3>
                        <span>{desc}</span>
                    </div>
                </div>
            </Link>
        );
    }
}

export default MovieCard;
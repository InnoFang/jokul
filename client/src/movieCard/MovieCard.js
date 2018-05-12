/**
 * Created by InnF on 2018/5/8.
 */

import React from 'react'
import {
    Card,
    Rate
} from 'antd';
import {
    Link
} from 'react-router-dom'

import './MovieCard.css';

const {Meta} = Card;

class MovieCard extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props.score / 2);
        const half = parseInt(this.props.score) % 2 == 1 ? 0.5 : 0;
        const star = parseInt(this.props.score / 2) + half;
        const desc =
            <div id="description">
                <Rate disabled allowHalf value={star}/>{this.props.score}
            </div>;

        return (
            <Link to={`/movieInfo/${this.props.title}`}>
                <Card
                    hoverable
                    style={{width: 240}}
                    cover={<img alt="post" src={this.props.post}/>}>
                    <Meta
                        title={this.props.title}
                        description={desc}
                    />
                </Card>
            </Link>
        );
    }
}

export default MovieCard;
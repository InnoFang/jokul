/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react';
import MovieList from '../movieList/MovieList';
import IconTitle from '../iconTitle/IconTitle'

class Home extends React.Component {

    render() {
        return (
            <div>
                <IconTitle/>
                <br/>
                <br/>
                <MovieList/>
            </div>
        );
    }
}

export default Home;

import React from 'react';
import {
    BackTop
} from 'antd'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

import Header from './header/header';
import Footer from './footer/footer';
/* Home 包含一个 IconTitle 和一个 MovieList，展示首页内容 */
import Home from './home/Home'
/* MovieInfo 展示电影详情页 */
import MovieInfo from './movieInfo/MovieInfo'
/* MovieCategory 展示电影类别列表 */
import MovieCategory from './movieCategory/MovieCategory'
/* 电影播放页面 */
import MoviePlay from './moviePlay/MoviePlay'
/* 电影资源管理，包括添加电影和删除电影，只有管理员权限才可以进入 */
import MovieResourceManage from './movieResourceManage/MovieResourceManage'

class App extends React.Component {

    render() {
        return (
            <div>
                <Router >
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact component={Home} path="/"/>
                            <Route exact component={MovieInfo} path="/movieInfo/:title"/>
                            <Route exact component={MovieCategory} path="/category"/>
                            <Route exact  component={MoviePlay} path="/play/:movie"/>
                            <Route exact  component={MovieResourceManage} path="/upload"/>
                            <Redirect push to="/"/>
                        </Switch>
                    </div>
                </Router>
                <BackTop/>
                <Footer/>
            </div>
        )

    }
}

export default App;

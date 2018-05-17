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
import Home from './home/Home'
import Footer from './footer/footer';
import MovieInfo from './movieInfo/MovieInfo'
import MovieCategory from './movieCategory/MovieCategory'
import MoviePlay from './moviePlay/MoviePlay'
import MovieResourceManage from './movieResourceManage/MovieResourceManage'

class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
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

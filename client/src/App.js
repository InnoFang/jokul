import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom'

import Header from './header/header';
import MovieList from './movieList/MovieList';
import Footer from './footer/footer';
import MovieInfo from './movieInfo/MovieInfo'

class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Router>
                    <div>
                        <Switch>
                            <Route exact component={MovieList} path="/" />
                            <Route exact component={MovieInfo}  path="/movieInfo/:title"/>
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </Router>
                <Footer/>
            </div>
        )

    }
}

export default App;

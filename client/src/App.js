import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Header from './header/header';
import Container from './container/Container';
import Footer from './footer/footer';
import MovieInfo from './movieInfo/MovieInfo'

class App extends React.Component {

    render() {

        return (
            <div>
                <Header/>
                <Router  history={this.props.history}>
                    <div>
                        <Route component={Container} path="/" />
                        <Route component={MovieInfo}  path="/movieInfo/:title"/>
                    </div>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default App;

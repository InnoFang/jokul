import React from 'react';

import Header from './header/header';
import Container from './container/Container';
import Footer from './footer/footer';

class App extends React.Component {

    render() {

        return (
            <div>
                <Header/>
                <Container/>
                <Footer/>
            </div>
        )
    }
}

export default App;

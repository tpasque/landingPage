import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Header from './header/header'
import Hero from './hero/hero'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Header />
                <Hero />
            </MuiThemeProvider>
        )
    }
}

export default App

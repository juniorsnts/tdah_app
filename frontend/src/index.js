import React, { Component } from 'react';
import { appNavigator } from './routes';

import { isToken } from './utils/auth';

export default class App extends Component {
    state = {
        istoken: false
    }

    componentWillMount(){
        isToken()
            .then(res => this.setState({ istoken: res }));
    }
    
    render(){
        const Layout = appNavigator(this.state.istoken);
        return <Layout/>
    }
}
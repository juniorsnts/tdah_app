import React, { Component } from 'react'
import { Container, NewPost, Photo, Question } from './styles';
import Header from '../components/Header';
import { getData, setData } from '../utils/storage';

class Forum extends Component {

    state = {
        
    }

    async componentDidMount() {
        const user_profile = await getData('user_profile');
        this.setState(JSON.parse(user_profile));     
    }

    render(){
        return (
            <>
            <Header navigation={this.props.navigation} background="#1C9E49"/>
            <Container>
                
            </Container>
            </>
        )
    }
}

export default Forum;

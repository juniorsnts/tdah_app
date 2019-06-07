import React, { Component } from 'react'
import { Container, Slide, Question, Response, Button, TextButton } from './styles';
import Header from '../components/Header';
import Swiper from 'react-native-swiper';

class Teste extends Component {

    render(){
        return (
            <>
            <Header navigation={this.props.navigation} background="#1C709E"/>
            <Container>
                <Swiper style={{flex: 1}}>
                    <Slide>
                       <Question></Question> 
                       <Response></Response>
                       <Button>
                           <TextButton></TextButton>
                       </Button>
                    </Slide>                
                </Swiper>
            </Container>
            </>
        )
    }
}

export default Teste;
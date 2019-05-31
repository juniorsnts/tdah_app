import React, { Component } from 'react'
import { Container, Content, Card, Title, ImageCard, Duration, Buttons, Button } from './styles';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

class Podcast extends Component {
    state = {
        buttonDisabled: true
    }

    handlePlay = () => {

    }

    render(){
        const { buttonDisabled } = this.state;
        return (
            <Container>
                <Header navigation={this.props.navigation} background="#1C9E9E"/>
                <Content>     
                    <Card>
                        <Title>Mitos e Verdades</Title>
                        <ImageCard source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LbNmHhdiBdrszxwiRLErOfsUlEPealEGOoZDHi_omj4FBYuMmQ'}}/>
                        <Duration>1h e 45min</Duration>
                        <Buttons>
                            <Button onPress={this.handlePlay} disabled={!buttonDisabled} style={{backgroundColor: !buttonDisabled ? '#d3d3d3' : '#FFF'}}>
                                <Icon name="md-play" size={30} color="#000000"/>
                            </Button>
                            <Button disabled={buttonDisabled} style={{backgroundColor: buttonDisabled ? '#d3d3d3' : '#FFF'}}>
                                <Icon name="md-pause" size={30} color="#000000"/>
                            </Button>
                        </Buttons>
                    </Card>           
                </Content>
            </Container>
        )
    }
}

export default Podcast;
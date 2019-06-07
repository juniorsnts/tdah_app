import React, { Component } from 'react'
import { Container, Content, ScrollHorizontal, Card, Title, ImageCard, Duration, Buttons, Button } from './styles';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';

let whoosh;

class Podcast extends Component {
    
    state = {
        buttonDisabled: true,
        name_sound: null,
        duration_sound: null,
        duration_count: null,
    }

    handlePlay = (name_sound) => {
        this.setState({buttonDisabled: !this.state.buttonDisabled});
        if(name_sound === this.state.name_sound){
            whoosh.play();
        } else {
            whoosh = new Sound(name_sound, undefined, (err)=>{
                if(err){
                    console.log(err);
                } else {
                    this.setState({name_sound: name_sound, duration_sound: whoosh.getDuration()});
                    whoosh.play();
                    this.updateTime();
                }
            })
        }
    }

    handlePause = () => {
        this.setState({buttonDisabled: !this.state.buttonDisabled});     
        whoosh.pause();   
    }

    changeSliding = (time) => {
        whoosh.setCurrentTime(time);
    }

    updateTime = () => {
        setInterval(() => {
            whoosh.getCurrentTime((seconds) => {
                this.setState({duration_count: seconds});
            });            
        }, 1000);
    }

    componentWillUnmount(){
        if(this.state.duration_count){
            whoosh.release();
        }
    }

    render(){
        const { buttonDisabled, duration_sound, duration_count } = this.state;
        return (
            <>
            <Header navigation={this.props.navigation} background="#1C9E9E"/>
            <Container>
                <Content>    
                    <ScrollHorizontal>
                        <Card>
                            <Title>Mitos e Verdades</Title>
                            <ImageCard source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LbNmHhdiBdrszxwiRLErOfsUlEPealEGOoZDHi_omj4FBYuMmQ'}}/>
                            <Buttons>
                                <Button onPress={() => this.handlePlay('http://static1.squarespace.com/static/53c75ac3e4b0e925a04c3057/t/5c21134c6d2a7362341499f0/1546450526044/Tribo+TDAH+%2301+-+TDAH%2C+mitos+e+verdades.mp3/original/Tribo+TDAH+%2301+-+TDAH%2C+mitos+e+verdades.mp3')} disabled={!buttonDisabled} style={{backgroundColor: !buttonDisabled ? '#d3d3d3' : '#FFF'}}>
                                    <Icon name="md-play" size={30} color="#000000"/>
                                </Button>
                                <Button onPress={this.handlePause} disabled={buttonDisabled} style={{backgroundColor: buttonDisabled ? '#d3d3d3' : '#FFF'}}>
                                    <Icon name="md-pause" size={30} color="#000000"/>
                                </Button>
                            </Buttons>
                            <Slider
                                style={{width: 'auto', height: 40, marginTop: 10, marginBottom: 5}}
                                minimumValue={0}
                                maximumValue={duration_sound ? duration_sound : 0}
                                minimumTrackTintColor="#000000"
                                maximumTrackTintColor="#FFFFFF"
                                value={duration_count}
                                disabled={!duration_count}
                                onSlidingComplete={(value) => this.changeSliding(value)}
                            />
                        </Card>                    
                    </ScrollHorizontal> 
                </Content>
            </Container>
            </>
        )
    }
}

export default Podcast;
import React from 'react'
import { Container, Dialog, Slide, Text, Buttons, Button, ButtonText } from './styles';
import Swiper from 'react-native-swiper';

const InitialDialog = (props) => {
    return (
        <Container>
            <Dialog>
                <Swiper ref={e => this.swiper = e } style={{backgroundColor: 'transparent'}} loop={false} showsPagination={false}>
                    <Slide>
                        <Text>Olá {props.user}, me chamo <Text style={{color: '#FF1493'}}>Rafa</Text> e é um prazer enorme ter você aqui. Irei te guiar para que você consiga entender como funciona o aplicativo.{"\n"}Vamos lá?</Text>
                        <Button onPress={() => this.swiper.scrollBy(1, true)}>
                            <ButtonText>Vamos sim</ButtonText>
                        </Button>
                    </Slide>
                    <Slide>
                        <Text>Tutorial 1</Text>
                        <Buttons>
                            <Button onPress={() => this.swiper.scrollBy(-1, true)} style={{backgroundColor: 'red', width: 70}}>
                                <ButtonText>Voltar</ButtonText>
                            </Button>
                            <Button onPress={() => this.swiper.scrollBy(1, true)} style={{width: 70}}>
                                <ButtonText>Entendi</ButtonText>
                            </Button>
                        </Buttons>
                    </Slide>
                    <Slide>
                        <Text>Tutorial 2</Text>
                        <Buttons>
                            <Button onPress={() => this.swiper.scrollBy(-1, true)} style={{backgroundColor: 'red', width: 70}}>
                                <ButtonText>Voltar</ButtonText>
                            </Button>
                            <Button onPress={() => this.swiper.scrollBy(1, true)} style={{width: 70}}>
                                <ButtonText>Entendi</ButtonText>
                            </Button>
                        </Buttons>
                    </Slide>
                    <Slide>
                        <Text>Tutorial 3</Text>
                        <Buttons>
                            <Button onPress={() => this.swiper.scrollBy(-1, true)} style={{backgroundColor: 'red', width: 70}}>
                                <ButtonText>Voltar</ButtonText>
                            </Button>
                            <Button onPress={() => props.finishTutorial()} style={{width: 70}}>
                                <ButtonText>Concluir</ButtonText>
                            </Button>
                        </Buttons>
                    </Slide>
                </Swiper>
            </Dialog>
        </Container>        
    )
}

export default InitialDialog;
import React from 'react'
import { Container, Left, Center, Text } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { StatusBar } from 'react-native';
const Header = (props) => {
    const backPage = () => {
        props.navigation.pop();
    }
    return (
        <>
        <StatusBar backgroundColor={props.background}/>
        <Container style={{backgroundColor: props.background}}>
            <Left>
                <Icon
                onPress={backPage} 
                color="#FFF"
                name="arrow-left" 
                size={28}/>
            </Left>            
            <Center>
                <Text>Voltar</Text>
            </Center>
        </Container>
        </>
    )
}

export default Header;

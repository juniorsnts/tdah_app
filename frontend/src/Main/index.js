import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Title, Logo, ButtonFace, ButtonTextFace, ButtonGoogle, ButtonTextGoogle } from './styles';
import LogoImage from '../assets/imgs/logo.png';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';
import { setData } from '../utils/storage';
import { StackActions, NavigationActions } from 'react-navigation';

class Main extends Component {
    
    loginFacebook = async () => {
        const login = await LoginManager.logInWithReadPermissions(['email','public_profile']);
        if(!login.isCancelled){
            const token = await AccessToken.getCurrentAccessToken();  
            const data = await this.getDataFacebook(token.userID, token.accessToken);
            await setData('token', token.accessToken);
            let formatData = {
                id: data.id,
                name: data.name,
                birthday: data.birthday,
                email: data.email,
                photo: data.picture.data.url
            };
            await setData('user_profile', JSON.stringify(formatData)); 
            this.nextHome();
        }
    }

    getDataFacebook = (user_id, access_token) => {
        return fetch(`https://graph.facebook.com/${user_id}?fields=email,name,birthday,picture&access_token=${access_token}`)
            .then(data => data.json());
    }
    
    loginGoogle = async () => {
        GoogleSignin.configure();
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const userData = await GoogleSignin.signIn();
            console.log(userData);
        }
        catch(err) {
            console.log(err)
        }
    }

    nextHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
          });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#ADD8E4"/>
                <Title>TDAH</Title>
                <Logo source={LogoImage}/>
                <ButtonFace onPress={this.loginFacebook}>
                    <Icon name="logo-facebook" size={30} color="#FFFFFF"/>
                    <ButtonTextFace>Continuar com Facebook</ButtonTextFace>
                </ButtonFace>
                <ButtonGoogle onPress={this.loginGoogle}>
                    <Icon name="logo-googleplus" size={30} color="#FFFFFF"/>
                    <ButtonTextGoogle>Continuar com Google</ButtonTextGoogle>
                </ButtonGoogle>
            </Container>
        )
    }
}

export default Main;
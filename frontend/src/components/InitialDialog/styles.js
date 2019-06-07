import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';

export const Container = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(52, 52, 52, 0.8);
`;

export const Dialog = styled.View`
    background: #FFF;
    width: 220px;
    height: 220px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    position: absolute;
    bottom: 70px;
    right: 50px;
    overflow: hidden;
`;

export const Slide = styled.View`
    flex: 1;
    padding: 5px;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #2491C0;
    font-size: 20px;
    text-align: center;
    font-family: Neucha;
`;

export const Buttons = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;

export const Button = styled.TouchableOpacity`
    background: #2491C0;
    padding: 5px;
    margin-top: 12px;
    justify-content- center;
    align-items: center;
    width: 100px;
    border-radius: 10px;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-family: Neucha;
    font-size: 16px;
`;
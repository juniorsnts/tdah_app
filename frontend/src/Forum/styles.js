import styled from 'styled-components/native';
import LinerGradient from 'react-native-linear-gradient';

export const Container = styled(LinerGradient).attrs({
    colors: ['#1C9E49', '#FFF']
})`
    flex: 1;
`;

export const NewPost = styled.View`
    height: 90px;
    background: #FFF;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    margin: 10px;
    border-radius: 10px;
`;

export const Photo = styled.Image`
    height: 55px;
    width: 55px;
    background-color: #FFF;
    border-radius: 200px;
    overflow: hidden;
    resize-mode: cover;
    margin-right: 20px;
    margin-left: 10px;
`;

export const Question = styled.TextInput`
    flex: 1;
    background: #FFF;
    height: 100%;
    border-radius: 10px;
    border: 2px solid #939393;
`;

import styled from 'styled-components/native';
import LinerGradient from 'react-native-linear-gradient';

export const Container = styled(LinerGradient).attrs({
    colors: ['#2491C0', '#99D4FF']
})`
    flex: 1;
`;

export const ScrollContent = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})``;

export const ContainerUser = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 12px;
`;

export const TabsContainer = styled.View`
    height: auto;
`;

export const HorizontalScroll = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})``;

export const Photo = styled.Image`
    height: 55px;
    width: 55px;
    background-color: #FFF;
    border-radius: 200px;
    margin-right: 10px;
    overflow: hidden;
    resize-mode: cover;
`;

export const Title = styled.Text`
    text-align: center;
    color: #FFFFFF;
    font-family: Neucha;
    font-size: 30px;
`;

export const Content = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 12px;
`;

export const RobotButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 2;
`;

export const Robot = styled.Image``;
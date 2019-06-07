import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#1C9E9E', '#99D4FF']
})`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View``;

export const ScrollHorizontal = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    padding: 5px;
`;

export const Card = styled.View`
    width: 272px;
    height: auto;
    background: #1C709E;
    border-radius: 15px;
    shadow-opacity: 0.75;
    shadow-offset: 15px 15px;
    elevation: 7;
    shadow-radius: 5px;
    margin-left: 5px;
    margin-right: 5px;
`;

export const Title = styled.Text`
    text-align: center;
    font-family: Neucha;
    color: #FFFFFF;
    font-size: 30px;
    margin-top: 20px;
`;

export const ImageCard = styled.Image`
    margin-top: 20px;
    height: 178px;
`;

export const Duration = styled.Text`
    margin-top: 20px;
    color: #DEDEDE;
    font-family: Neucha;
    font-size: 25px;
    text-align: center;
`;

export const Buttons = styled.View`
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-around;
    padding-right: 20px;
    padding-left: 20px;
`;

export const Button = styled.TouchableOpacity`
    background: #FFF;
    width: 59.22px;
    height: 55.58px;
    border-radius: 100;
    justify-content: center;
    align-items: center;
`;


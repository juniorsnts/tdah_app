import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#1C9E49', '#99D4FF']
})`
  flex: 1;
`;

export const ScrollContent = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})``;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const Card = styled.View`
  width: 80%;
  background-color: #1C709E;
  margin-top: 12px;
  border-radius: 10px;  
  margin-bottom: 10px;
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-offset: 15px 15px;
  elevation: 7;
`;

export const Title = styled.Text`
  text-align: center;
  color: #FFF;
  font-size: 20px;
  margin-top: 12px;
  font-family: Neucha;
`;

export const SubTitle = styled.Text.attrs({
  lineHeight: 1.5
})`
  padding: 10px;
  color: #FFF;
  text-align: justify;
  font-size: 16px;
  margin-bottom: 5px;
`;
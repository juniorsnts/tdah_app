import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ViewClinic = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  position: absolute;  
  bottom: 25px;  
  z-index: 22222222;
  width: 100%; 
`;

export const Card = styled.View`
  height: 170px;
  width: 140px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 10px;
  background-color: #FFF;
  overflow: hidden;
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-offset: 15px 15px;
  elevation: 7;
  margin-bottom: 5px;
`;

export const CardImage = styled.Image`
  height: 50%;
  background-color: #939393;
`;

export const ViewDetais = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const Name = styled.Text`
  margin-top: 3px;
  text-align: center;
  font-family: Neucha;
  font-size: 12px;
  color: #000000;
`;

export const Address = styled.Text`
  text-align: center;
  color: #939393;
  font-family: Neucha;
  font-size: 8px;  
`;

export const Time = styled.Text`
  color: #383838;
  font-size: 8px;
  font-family: Neucha;
  text-align: center;
`;

export const ButtonCard = styled.TouchableOpacity`
  background: #1C9E87;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 17px;
  margin-bottom: 3px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 10px;
  font-family: Neucha;
  margin-left: 5px;
`
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#1C9E87', '#99D4FF']
})`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ViewClinic = styled.View``;

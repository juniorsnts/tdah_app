import styled from 'styled-components/native';

export const Card = styled.View`
    width: 152px;
    height: 188px;
    background: #1E8B85;
    border-radius: 15px;
    margin-top: 20px;
    margin-left: 12px;
    margin-right: 12px;
    shadow-opacity: 0.75;
    shadow-radius: 5px;
    shadow-offset: 15px 15px;
    elevation: 7;
`;

export const TitleCard = styled.Text`
    margin-top: 10px;
    font-family: Neucha;
    color: #FFFFFF;
    text-align: center;
    font-size: 16px;
`;

export const Line = styled.View`
    border: 0.5px solid #FFFFFF;
    margin: 5px;
`;

export const DescriptionCard = styled.Text.attrs({
    numberOfLines: 6,
    ellipsizeMode: 'tail'
})`
    color: #000000;
    text-align: justify;
    margin-left: 8px;
    margin-right: 8px;
`;

export const Footer = styled.TouchableOpacity`
    width: 100%;
    height: 31px;
    background: #0C3937;
    border-bottom-end-radius: 15px;
    border-bottom-start-radius: 15px;
    bottom: 0;
    position: absolute;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const TextFooter = styled.Text`
    color: #FFF;
    font-size: 14px;
    font-family: Neucha;
    margin-left: 5px;
`;

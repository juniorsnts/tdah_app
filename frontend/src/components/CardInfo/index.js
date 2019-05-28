import React from 'react';
import { Card, TitleCard, Line, DescriptionCard, Footer, TextFooter } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';


const CardInfo = (props) => {
    const openPage = () => {
        props.navigation.push(props.page);
    }
    const { backgroundCard, title, description, backgroundFooter } = props;
    return (
        <Card style={{backgroundColor: backgroundCard}}>
            <TitleCard>{ title }</TitleCard>
            <Line/>
            <DescriptionCard>{ description }</DescriptionCard>
            <Footer style={{backgroundColor: backgroundFooter}} onPress={openPage}>
                <TextFooter>Saber mais</TextFooter>
                <Icon name="caretright" color="#FFFF" size={16}/>
            </Footer>                    
        </Card>
    )
}

export default CardInfo;

import React from 'react';
import { Card, TitleCard, Line, DescriptionCard, Footer, TextFooter } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { PermissionsAndroid } from 'react-native';

const CardFunc = (props) => {
    const openPage = () => {
        if(props.page == 'Mapa'){
            permissionMap(props);                        
        } else {
            props.navigation.push(props.page);
        }
    }
    const permissionMap = async (props) => {
        try {
            const permission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                )
                if(permission === PermissionsAndroid.RESULTS.GRANTED){
                    disabledButton = true;
                    props.navigation.push(props.page);
            }
        }
        catch(err){
            console.log(err);
        }        
    }
    const { backgroundCard, title, description, backgroundFooter, nameIcon, textFooter } = props;
    return (
        <Card style={{backgroundColor: backgroundCard}}>
            <TitleCard>{ title }</TitleCard>
            <Line/>
            <DescriptionCard>{ description }</DescriptionCard>
            <Footer style={{backgroundColor: backgroundFooter}} onPress={openPage}>
                <Icon name={nameIcon} color="#FFF" size={20}/>
                <TextFooter>{ textFooter }</TextFooter>
            </Footer>                    
        </Card>
    )
}

export default CardFunc;

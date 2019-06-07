import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, ScrollContent, ContainerUser, TabsContainer, HorizontalScroll, Photo, Title, Content, RobotButton, Robot } from './styles';
import Card from '../components/CardInfo';
import CardFunc from '../components/CardFunc';
import { getData, setData } from '../utils/storage';
import Robo from '../assets/imgs/robot.png';
import InitialDialog from '../components/InitialDialog';
import DialogBot from '../components/DialogBot';

class Home extends Component {
    state = {
        show_tutorial: null,
        show_botdialog: false
    }

    finishTutorial = () => {
        setData('showTutorial', 'false');
        this.setState({show_tutorial: false});
    }

    async componentDidMount() {
        const user_profile = await getData('user_profile');
        const show_tutorial = await getData('showTutorial');
        this.setState({show_tutorial: show_tutorial === 'false' ? false : true, }, JSON.parse(user_profile));
        setTimeout(() => this.scrollView.scrollTo({ x: 150 }) , 2);        
    }
    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#2491C0"/>
                <ScrollContent>
                    <ContainerUser>
                        <Photo source={{uri: this.state.photo}}/>
                        <Title>Olá, {this.state.name}</Title>
                    </ContainerUser>       
                    <TabsContainer>
                        <HorizontalScroll ref={ (scrollView) => {this.scrollView = scrollView} }>
                            <CardFunc navigation={this.props.navigation} page="Teste" backgroundCard="#1C709E" title="Teste de TDAH" backgroundFooter="#0B2837" nameIcon="md-clipboard" textFooter="Fazer teste" description="Desenvolvemos um teste simples para calcular o indice de TDAH, lembrando que isso foi baseado em pesquisas."/>                    
                            <CardFunc navigation={this.props.navigation} page="Podcast" backgroundCard="#1C9E9E" title="Podcasts TDAH" backgroundFooter="#0D4C4C" nameIcon="md-headset" textFooter="Ouvir podcasts" description="Aqui você encontrará podcasts relacionados a TDAH, toda semana tem um novo, e você ainda poderá ouvir os antigos."/>                    
                            <CardFunc navigation={this.props.navigation} page="Mapa" backgroundCard="#1C9E87" title="Mapa de ajuda" backgroundFooter="#0D483E" nameIcon="md-navigate" textFooter="Mostrar" description="Montamos um mapa com locais que estão capacitados para tratar e identificar esse tipo de transtorno e ajudar com o isso."/>                    
                            <CardFunc navigation={this.props.navigation} page="Forum" backgroundCard="#1C9E49" title="Fórum" backgroundFooter="#073918" nameIcon="md-chatboxes" textFooter="Postar/Comentar" description="Nesse ambiente você poderá postar dúvidas, comentar em outros posts podendo manter o anonimato se preferir ou não."/>                    
                        </HorizontalScroll>
                    </TabsContainer>             
                    <Content>
                        <Card navigation={this.props.navigation} page="InfoTdah" backgroundCard="#1E8B85" title="Sobre TDAH" backgroundFooter="#0C3937" description="O Transtorno do Déficit de Atenção com Hiperatividade é um transtorno neurobiológico, de causas genéticas, que aparece na infância e freqüentemente acompanha o indivíduo"/>
                        <Card navigation={this.props.navigation} page="InfoSintomas" backgroundCard="#1E648B" title="Sintomas" backgroundFooter="#0A3344" description="O TDAH na infância em geral se associa a dificuldades na escola e no relacionamento com demais crianças, pais e professores. As crianças são tidas como “avoadas” ..."/>
                        <Card navigation={this.props.navigation} page="InfoCausas" backgroundCard="#1C9E49" title="Causas" backgroundFooter="#073918" description="Já existem inúmeros estudos em todo o mundo inclusive no Brasil demonstrando que a prevalência do TDAH é semelhante em diferentes regiões, o que indica que o transtorno ..."/>
                        <Card navigation={this.props.navigation} page="InfoTratamento" backgroundCard="#9E911C" title="Tratamento" backgroundFooter="#49430D" description="Diferentes tipos de terapia podem ajudar as pessoas com TDAH a viver de uma forma melhor. A opção mais adequada para o tratamento pode ser diferente em cada pessoa. Alguns tipos ..."/>
                    </Content>
                </ScrollContent>
                <RobotButton disabled={this.state.show_tutorial} onPress={() => this.setState({show_botdialog: !this.state.show_botdialog})}>
                    <Robot source={Robo}/>
                </RobotButton>   
                {this.state.show_tutorial && (
                    <InitialDialog user={this.state.name} finishTutorial={this.finishTutorial}/>
                )}
                {this.state.show_botdialog && (
                    <DialogBot photoUser={this.state.photo}/>
                )}
            </Container>            
        )
    }
}

export default Home;
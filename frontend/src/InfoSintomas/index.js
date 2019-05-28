import React from 'react'
import { Container, ScrollContent, Content, Card, Title, SubTitle } from './styles';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

const Info = (props) => {
    return (
        <SubTitle>
        <Icon name="hand-o-right" size={20}/>
            {props.text}
        </SubTitle>
    )
}

const InfoSintomas = (props) => {
    return (
        <Container>
            <Header navigation={props.navigation} background="#1E648B"/>   
            <ScrollContent>
                <Content>
                    <Card style={{backgroundColor: '#1C9E9E'}}>
                        <Title>Sintomas do TDAH</Title>
                        <SubTitle>Para diagnosticar o TDAH é preciso reconhecer os sintomas característicos desse transtorno e notar a persistência e frequência dos mesmos. A avaliação mais correta poderá ser dada apenas por um médico especializado, mas a lista abaixo torna-se importante para que você possa identificar e recorrer a ajuda médica de maneira precoce.</SubTitle>
                    </Card>       
                    <Card style={{backgroundColor: '#1C9E87'}}>
                        <Title>Desatenção</Title>
                        <Info text=" Têm dificuldade para manter a concentração durante muito tempo em um assunto específico, serem facilmente distraído por estímulos externos"/>    
                        <Info text=" Erram muito por falta de atenção no que estão fazendo"/> 
                        <Info text=" Evitam atividades que demandam um grande esforço mental"/>                   
                        <Info text=" Frequentemente esquecem o que iam falar"/>
                        <Info text=" Têm dificuldade em se organizar com o planejamento de tempo e com objetos"/>
                        <Info text=" Hábito de perder coisas importantes para o dia a dia"/>
                        <Info text=" Não ouvem quando o chamam, podendo ser considerados desinteressados ou egoístas"/>
                    </Card>       
                    <Card style={{backgroundColor: '#1C9E49'}}>
                        <Title>hiperatividade e impulsividade</Title>
                        <Info text=" Mexer o corpo com frequência, em especial, mãos e pés"/>
                        <Info text=" Fala excessiva;"/>
                        <Info text=" Pressa em se comunicar, não esperando que outras pessoas concluam sua fala ou pensamento"/>
                        <Info text=" Inquietude em ambientes calmos"/>
                        <Info text=" Constante mudança de posição e incapacidade de permanecer sentado por períodos longos"/>
                        <Info text=" Dificuldade em corresponder a regras como “esperar a vez”"/>
                        <Info text=" Tentam assumir o controle das atividades de outras pessoas"/>
                    </Card>      
                </Content>        
            </ScrollContent> 
        </Container>
    )
}

export default InfoSintomas

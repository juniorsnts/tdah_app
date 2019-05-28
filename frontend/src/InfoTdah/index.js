import React from 'react'
import { Container, ScrollContent, Content, Card, Title, SubTitle } from './styles';
import Header from '../components/Header';

const InfoTdah = (props) => {
    return (
        <Container>
            <Header navigation={props.navigation} background="#1E8B85"/> 
            <ScrollContent>
            <Content>
                <Card style={{backgroundColor: '#1C9E87'}}>                
                    <Title>O que é TDAH?</Title>
                    <SubTitle>O Transtorno do Déficit de Atenção com Hiperatividade (TDAH) é um transtorno neurobiológico, de causas genéticas, que aparece na infância e freqüentemente acompanha o indivíduo por toda a sua vida. Ele se caracteriza por sintomas de desatenção, inquietude e impulsividade. Ele é chamado às vezes de DDA (Distúrbio do Déficit de Atenção). Em inglês, também é chamado de ADD, ADHD ou de AD/HD.</SubTitle>
                </Card>
                <Card style={{backgroundColor: '#1C9E9E'}}>
                    <Title>Existe mesmo o TDAH?</Title>
                    <SubTitle>Ele é reconhecido oficialmente por vários países e pela Organização Mundial da Saúde (OMS). Em alguns países, como nos Estados Unidos, portadores de TDAH são protegidos pela lei quanto a receberem tratamento diferenciado na escola.</SubTitle>
                </Card>
                <Card style={{backgroundColor: '#1C9E49'}}>                
                    <Title>O TDAH é comum?</Title>
                    <SubTitle>Ele é o transtorno mais comum em crianças e adolescentes encaminhados para serviços especializados. Ele ocorre em 3 a 5% das crianças, em várias regiões diferentes do mundo em que já foi pesquisado. Em mais da metade dos casos o transtorno acompanha o indivíduo na vida adulta, embora os sintomas de inquietude sejam mais brandos.</SubTitle>                    
                </Card>
            </Content> 
            </ScrollContent>          
        </Container>
    )
}

export default InfoTdah;
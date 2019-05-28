import React from 'react'
import { Container, ScrollContent, Content, Card, Title, SubTitle } from './styles'
import Header from '../components/Header';

const InfoCausas = (props) => {
    return (
        <Container>
            <Header navigation={props.navigation} background="#1C9E49"/>   
            <ScrollContent>
                <Content>
                    <Card style={{backgroundColor: '#1C9E9E'}}>
                        <Title>Causas do TDAH</Title>
                        <SubTitle>O Transtorno de Déficit de Atenção com Hiperatividade é um dos transtornos mais estudados no mundo. Considera-se, hoje, que as causas do aparecimento do TDAH são uma combinação entre fatores genéticos, alterações no cérebro e fatores ambientais. Saiba mais sobre cada um dos fatores de risco:</SubTitle>
                    </Card>
                    <Card style={{backgroundColor: '#1C9E87'}}>
                        <Title>Genética e Hereditariedade</Title>
                        <SubTitle>Sabe-se hoje que as chances de ter o TDAH é bem maior em filhos e familiares de pessoas com esse transtorno.{'\n\n'}Estudos descobriram que 60% das crianças com o Transtorno de Déficit de Atenção com Hiperatividade tinham um dos pais com o transtorno e que a probabilidade de uma criança ter o TDAH aumenta em até oito vezes se os pais também tiverem o problema.{'\n\n'}Além disso, o risco de apresentar o transtorno é cinco vezes maior entre familiares de pessoas com TDAH do que em pessoas sem o transtorno na família.</SubTitle>
                    </Card>
                    <Card style={{backgroundColor: '#1C9E49'}}>
                        <Title>Anormalidades cerebrais</Title>
                        <SubTitle>Muitos estudos descobriram que o TDAH causa alterações no cérebro. Existem, no cérebro das pessoas que sofrem desse transtorno, mudanças na região frontal e nas conexões com o resto do cérebro. A região frontal é responsável pela capacidade de prestar atenção, organização, memória e autocontrole.</SubTitle>
                    </Card>
                    <Card style={{backgroundColor: '#9E911C'}}>
                        <Title>Fatores ambientais</Title>
                        <SubTitle>Estudos indicaram que o fato de a criança apresentar um peso baixo no nascimento (menos de 1.500 g) gera um risco de 2 a 3 vezes maior para o surgimento do TDAH, embora a maioria das crianças que nascem com baixo peso não desenvolva esse transtorno.{'\n\n'}Outros fatores relacionados que podem causar o TDAH são: história de abuso infantil, negligência familiar, exposição a neurotoxinas como o chumbo, infecções e exposição ao álcool durante a gravidez.</SubTitle>
                    </Card>
                </Content>
            </ScrollContent>
        </Container>
    )
}

export default InfoCausas

import React from 'react'
import { Container, ScrollContent, Content, Card, Title, SubTitle } from './styles';
import Header from '../components/Header';

const InfoTratamento = (props) => {
    return (
        <Container>
            <Header navigation={props.navigation} background="#9E911C"/>
            <ScrollContent>
                <Content>
                    <Card style={{backgroundColor: '#1C9E87'}}>
                        <Title>Tratamento</Title>
                        <SubTitle>O TDAH não tem cura, mas pode ter os seus sintomas reduzidos naturalmente conforme o desenvolvimento humano no período da adolescência e idade adulta. De qualquer forma, cerca de 50% das pessoas com o transtorno, continuam apresentando os sintomas durante toda a vida.</SubTitle>
                    </Card>
                    <Card style={{backgroundColor: '#1C9E49'}}>
                        <Title>Orientação psicológica</Title>
                        <SubTitle>Diferentes tipos de terapia podem ajudar as pessoas com TDAH a viver de uma forma melhor. A opção mais adequada para o tratamento pode ser diferente em cada pessoa. Alguns tipos de terapia comuns e eficazes são: terapia comportamental, terapia cognitiva, terapia cognitivo-comportamental, treinamento de habilidades sociais, terapia psicoeducacional e terapia fonoaudiológica.{'\n\n'}Esse suporte da terapia pode ajudar as crianças com TDAH a buscarem uma mudança em seu comportamento, controlar impulsos e lidar com acontecimentos emocionalmente difíceis. Já em adolescentes e adultos com o transtorno, a terapia pode ajudar em questões de baixa autoestima, organização pessoal e profissional e no controle da impulsividade.</SubTitle>
                    </Card>
                    <Card style={{backgroundColor: '#1C9E9E'}}>
                        <Title>Uso de medicamentos</Title>
                        <SubTitle>Geralmente, os medicamentos utilizados para tratar os sintomas do TDAH são da classe dos estimulantes que, apesar do nome, causam um efeito calmante, como é o caso da Ritalina, um dos mais indicados pelos médicos. Esses medicamentos podem reduzir a hiperatividade e impulsividade, além de melhorar a capacidade de concentração, trabalho e aprendizado da pessoa que tem o transtorno.{'\n\n'}Todo e qualquer medicamento só poderá ser manipulado e utilizado a partir da prescrição médica. A automedicação no TDAH ou qualquer outro transtorno psicológico pode afetar a redução dos sintomas, provocar efeitos colaterais e prejudicar o tratamento psicológico.</SubTitle>
                    </Card>
                    <Card style={{backgroundColor: '#1C709E'}}>
                        <Title>Mudança de hábitos</Title>
                        <SubTitle>Mudanças simples em hábitos do cotidiano também podem ajudar no tratamento do TDAH, agindo em conjunto com a terapia e medicamentos. Hoje, sabe-se que mudanças na alimentação, como reduzir o consumo de cafeína e açúcar, podem ajudar a controlar os sintomas do transtorno.{'\n\n'}Além disso, estudos também têm mostrado que a prática de atividades físicas intensas, como nadar e correr podem melhorar o funcionamento cognitivo e comportamental. Assim, pessoas com TDAH que praticam regularmente exercícios físicos podem reduzir os sintomas do transtorno e melhorar seu rendimento.</SubTitle>
                    </Card>
                </Content>
            </ScrollContent>
        </Container>
    )
}

export default InfoTratamento

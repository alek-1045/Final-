import React from 'react'
import { Container, Content, Input, Message, Message1, Message2 } from './styles'
import { DigitalAdd } from '../DigitalAdd';
import { Header } from '../../components/Header';
import { Image } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Profile() {
    return(
        <Container>
            <Content>
                <Header/>
    
                <Message>
                    <AntDesign name="idcard" size={24} color="blue" />   Número do CPF{'\n'}
                digite seu CPF para criar ou acessar sua conta com gov.br{'\n'}
                </Message>
                <Input type="text" placeholder="Digite seu CPF"/>
                <DigitalAdd/>
                <Message1>
                    Outras opções de indetificaçãos
                </Message1>
                <Message1>
                <MaterialCommunityIcons name="bank" size={24} color="blue" />   Seu Banco
                </Message1> 
                <Message1>
                <AntDesign name="cloud" size={24} color="blue" />   Seu certificado digital em nuvem
                </Message1>
                <Message2>
                <AntDesign name="infocirlce" size={24} color="blue" />  Entenda a conta gov.br
                </Message2>
            </Content>
        </Container>
    )
}
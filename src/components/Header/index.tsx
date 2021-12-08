import { Container, Text } from './styles'
import { DigitalAdd } from '../DigitalAdd';
import header1 from '../../assets/header1.png';
import { Image } from 'react-native';
import React from 'react';

export function Header() {
    return(
        <Container>
            <Image source={header1}/>
            <Text>
                Identifique-se no gov.br.com:
            </Text>
        </Container>
    )
}
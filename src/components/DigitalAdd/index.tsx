import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container } from './styles' 
import { Title } from '../Digitalcon/styles';

export function DigitalAdd({ ...rest}: TouchableOpacityProps) {
    return (
        <Container {...rest}>
            <Title>
                Continuar
            </Title>
        </Container>
    )
}

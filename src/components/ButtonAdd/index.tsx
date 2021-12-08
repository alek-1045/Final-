import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container } from './styles' 
import { Title } from '../ButtonIcon/styles';

export function ButtonAdd({ ...rest}: TouchableOpacityProps) {
    return (
        <Container {...rest}>
            <Title>
                Continuar
            </Title>
        </Container>
    )
}

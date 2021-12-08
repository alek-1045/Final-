import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import carteira from '../../assets/carteira.png';
import { ButtonIcon } from '../../components/ButtonIcon'
import { Container, Title, Content, } from './styles';


export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return(
        <Container>
            
            <Image source={carteira} />
            <Content>
            <Title>
                CARTEIRA DE TRABALHO DIGITAL
            </Title>
            <ButtonIcon title="Enviar"
                activeOpacity={0.7}
                disabled={false}
                onPress={handleSignIn}
            />
            </Content>
        </Container>
    )
}
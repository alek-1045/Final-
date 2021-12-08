import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background}; 
`;

// export const Image1 = styled(Feather)`

//     font-size: 20px;
    
//     align-items: center;
//     margin-left: 1%;
//     margin-top: -32px;
// `;

export const Content = styled.View`
    margin-top: -40px;
    padding: 50px;
`;

export const Title = styled.Text`
    color: #042b6c ;
    text-align: center;
    font-size: 20px;
    margin-bottom: 16px;
`;


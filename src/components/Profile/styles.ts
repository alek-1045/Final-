import styled from 'styled-components/native' 


export const Container = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const Content = styled.View`
    margin-top: 5px;

`;


export const Input = styled.TextInput`
    background-color: #ffff;
    color: #000;
    font-size: 18px;
    border-width: 1px;
    margin-top: 10px;
    border-radius: 10px;
    width: 330px;
    padding: 10px;
`;

export const Message = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title500};
    color: ${({ theme }) => theme.colors.overlay};
`;


export const Message1 = styled.Text`

    margin-top: 30px;
    font-family: ${({ theme }) => theme.fonts.title500};
    color: ${({ theme }) => theme.colors.overlay};
`;

export const Message2 = styled.Text`

    margin-top: 200px;
    font-family: ${({ theme }) => theme.fonts.title500};
    color: ${({ theme }) => theme.colors.overlay};
`;

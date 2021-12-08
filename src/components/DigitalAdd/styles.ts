import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
    width: 80%;
    height: 56px;
    background-color: #002f6c;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
    padding: 30px;
    margin-bottom: 40px;
    
`;

export const Title = styled.Text`
    flex: 1;
    font-size: 15px;
    text-align: center;
    color: ${({ theme }) => theme.colors.heading}
`;

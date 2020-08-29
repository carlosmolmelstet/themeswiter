import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background:  ${props => props.theme.colors.primary};
    color: #fff;
    display: flex;
    padding: 0 10vw;
    align-items: center;
    justify-content: space-between;

    
    .divlogo{
        color:  ${props => props.theme.colors.secundary};
        text-transform: uppercase;
        font-weight: 600;
        font-size: 20px;
    }
    Switch{
        float: right;
    }
`;

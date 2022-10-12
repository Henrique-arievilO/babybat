import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 10vh;
    padding: 1rem;
    padding-right: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.primaryColor};
`
export const Container = styled.section`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1`
    font-family: var(--primaryFont);
    font-weight: 400;
    font-size: 3rem;
`
export const Img = styled.img`
    width: 50px;
    margin: 5px;
    
`
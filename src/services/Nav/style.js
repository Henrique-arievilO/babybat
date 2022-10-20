import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 640px) {
        display: none;
    }
`
export const Li = styled.li`
    width: 9rem;
    height: 2rem;
    text-align: center;
    transition: 400ms all;

    &:hover{
        transform: scale(1.1);
    }


    a{
        width: 100%;
        padding: 0 1rem;
        font-family: var(--secundaryFont);
        font-size: 1.5rem;
        color: ${props => props.theme.fontColor}
    }
`
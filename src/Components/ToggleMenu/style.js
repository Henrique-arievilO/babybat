import styled from 'styled-components'

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    opacity: 1;
    background-color: ${props => props.theme.secundaryColor};
`
export const Button = styled.button`
    display: none;

    @media (max-width: 640px) {
        width: 5rem;
        height: 2rem;
        display: initial;
        background-color: var(--violet500);
        border: none;
        float: right;
    }
`
export const Ul = styled.ul`
    width: 100%;
    height: calc(100vh - 120px);
    position: absolute;
    z-index: 999;
    top: 120px;
    left: 0;
    background-color: ${props => props.theme.primaryColor};
`
export const Li = styled.li`
    width: 100%;
    height: 3rem;
    text-align: center;
    transition: 400ms all;
    border-bottom: solid 2px ${props => props.theme.tertiaryColor};

    &:hover{
        transform: scale(1.1);
    }


    a{
        width: 100%;
        padding: 0 6rem;
        font-family: var(--secundaryFont);
        font-size: 1.5rem;
        line-height: 3rem;
        color: ${props => props.theme.fontColor};
    }
`
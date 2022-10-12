import styled, { createGlobalStyle } from "styled-components";
import angelRhapsody from '../assets/font/angelRhapsody.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'angelRhapsody';
        src: url(${angelRhapsody});
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body{
        background-color: ${props => props.theme.secundaryColor};
        width: 100vw;
        height: 10vh;

        ::-webkit-scrollbar{
        display: none;
        };
    }

    h1, h2, h3, h4, h5, h6, p, a{
        color: ${props => props.theme.textColor};
    }

    :root{
        //Colors

        --violet100: #f3ecfa;
        --violet200: #d7beee;
        --violet300: #ba8fe2;
        --violet400: #9d60d5;
        --violet500: #8034c7;
        --violet600: #622898;
        --violet700: #441c69;
        --violet800: #260f3b;
        --violet900: #08030c;

        //Fonts

        --secundaryFont: 'Griffy', cursive;
        --primaryFont: 'angelRhapsody', sans-serif;

    }
`
export const Toggler = styled.button`
    width: 60px;
    height: 30px;
    margin: 1rem;
    position: absolute;
    right: 0;
    border: none;
    box-shadow: inset 0 0 15px 1px;
    border-radius: 30px;
    cursor: pointer;
    transition: 400ms;
    text-align: left;
`
export const SwitchToggle = styled.input`
    width: 60px;
    height: 30px;
    border: none;
    appearance: none;
    background-color: var(--violet200);
    box-shadow: inset 0 0 15px 1px;
    border-radius: 30px;
    cursor: pointer;

    &:before{
        content: '';
        width: 26px;
        height: 26px;
        margin: 2px;
        border-radius: 50%;
        background-color: var(--violet500);
        position: absolute;
        box-shadow: inset 0 0 15px 1px;
        transition: 400ms;
    }

    :checked::before{
        transform: translateX(30px);
    }
    `
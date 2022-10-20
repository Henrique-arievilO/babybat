import styled from 'styled-components'
import Background from '../../assets/image/bgHome.jpg'


export const Home = styled.section`
    width: 100%;
    height: calc(100vh - 150px);
    background-image: url(${Background});
    background-size: cover;
    background-position: right;
    filter: hue-rotate(-45deg);
`
export const Title = styled.h2`
    font-family: var(--primaryFont);
    font-weight: normal;
`

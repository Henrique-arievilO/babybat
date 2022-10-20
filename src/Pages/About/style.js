import styled from 'styled-components'

export const About = styled.section`
    width: 100%;
    height: calc(100vh - 150px);
    padding: 2rem;

    @media (max-width: 640px) {
        height: 100%;
    }
`
export const Title = styled.h2`
    font-family: var(--primaryFont);
    font-weight: 100;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
`
export const P = styled.p`
    width: 75%;
    margin: 1rem auto 0;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.5rem;
`
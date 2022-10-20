import styled from 'styled-components'

export const Songs = styled.section`
    width: 100%;
    height: calc(100vh - 150px);
    padding: 2rem;

    @media (max-width: 640px) {
        height: 100%;
    }
`
export const Title = styled.h2`
    font-family: var(--primaryFont);
    font-weight: normal;
`
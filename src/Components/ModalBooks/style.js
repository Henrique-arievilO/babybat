import styled from 'styled-components'

export const Wrap = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Card = styled.div`
    width: 15rem;
    height: 15rem;
    margin: 0 auto;
    border: 1px solid #000;
    position: relative;
`
export const Modal = styled.div`
    width: 15rem;
    height: 15rem;
    padding: 1rem;
    margin: 0 auto;
    border: 1px solid #000;
    background-color: var(--violet400);
    position: absolute;
    z-index: 99;
`
export const Button = styled.button`
    width: 5rem;
    height: 2rem;
    background-color: var(--violet500);
    border: none;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`
export const BtnClose = styled.button`
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    line-height: 2rem;
    border-radius: 50%;
    background-color: var(--violet500);
    border: none;
    float: right;
    color: ${props => props.theme.textColor};
    box-shadow: 2px 2px 4px #000;
`
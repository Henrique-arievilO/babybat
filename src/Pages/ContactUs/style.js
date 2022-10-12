import styled from 'styled-components'

export const Contactus = styled.section`
    width: 100%;
    height: 85vh;
    padding: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`
export const Title = styled.h2`
    font-family: var(--primaryFont);
    font-weight: normal;
    font-size: 2rem;
    margin-bottom: 2rem;
`
export const Form = styled.form`
    width: 50%;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: 5px 5px 10px;
    background-color: ${props => props.theme.primaryColor};
`
export const InputBox = styled.div`
    width: 250px;
    margin: 1rem;
`
export const Label = styled.label`
    text-transform: uppercase;
    color: ${props => props.theme.textColor};
    font-family: var(--secundaryFont);
    letter-spacing: 3px;
    margin-bottom: 10px;
`
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.primaryColor};
    outline: none;
    color: ${props => props.theme.textColor};
    box-shadow: inset 1px 1px 8px 1px var(--violet900);

    &:focus{
        background-color: ${props => props.theme.secundaryColor};
    }
`
export const Textarea = styled.textarea`
    width: 250px;
    height: 5rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColor};
    resize: none;
    box-shadow: inset 1px 1px 8px 1px var(--violet900);

    &:focus{
        background-color: ${props => props.theme.secundaryColor};
    }
`
export const Button = styled.button`
    width: 5rem;
    height: 3rem;
    margin: 1rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.secundaryColor};
    color: ${props => props.theme.textColor};
    font-family: var(--secundaryFont);
    font-weight: normal;
    font-size: 1.5rem;
    box-shadow: 2px 2px 4px #000;
    cursor: pointer;

    &:active{
        box-shadow: 0 0 1px #000;
    }
`
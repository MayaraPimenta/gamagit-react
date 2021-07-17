import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Content = styled.div` 
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input `
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 2.0rem;
    padding: 0 .5rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const Button = styled.button `
    height: 2.1rem;
    border: none;
    background: #b52828;
    color: #f8f8f8;
    border-radius: 0 .25rem .25rem 0;

    &:hover {
        cursor: pointer;
        filter: brightness(1.8)
    }

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const Error = styled.span `
    display: block;
    font-size: 0.75rem;
    color: #b52828;
    font-family: sans-serif;
    font-weight: bold;
    margin-top: 1rem;
` 
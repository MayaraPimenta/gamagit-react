import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div `
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;

export const Title = styled.h1 `
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #f8f8f8;
    background: #b52828;
    border-radius: .25rem;

    padding: 0.8rem;
    font-weight: 200;
`;

export const List = styled.ul `
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li `
    margin: .5rem 0;
    background: #fac0c0;
    color: #f8f8f8;
    padding: .5rem;
    border-radius: .25rem;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    
    background-color: #b52828;
    padding: .5rem;
    text-decoration: none;
    color: #f8f8f8;
    font-family: sans-serif;
    border-radius: .25rem;
`
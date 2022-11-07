import styled from 'styled-components';
import kitty from '../../screenshot/criptos.jpg';
import entropicaimg from '../../screenshot/entropica.jpg';



export const Buttons = styled.div `
    display: flex;
    flex-direction: row;

    @media(max-width: 780px){
        display: flex;
        flex-direction: column;
    }
    `

export const P = styled.p `
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Container = styled.div `
    background-color: white;
    width: 100%;
    height: 100vh;
    font-size: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 50px;

    @media(max-width: 780px){
        display: flex;
        flex-direction: column;
        width: 100%;
        heigth: auto;
        margin-bottom: 100px;
        margin-top: 100px;
    }
 `

export const Button1 = styled.button  `
    width: 400px;
    min-width: 100px;
    min-height: 60px;
    height: 300px;
    background-image: url(${entropicaimg});
    background-size:cover;
    background-position: center;
    outline: none;
    border: dotted white;
    margin: 20px;
    border-radius: 20px;
    transition: all 500ms ease-out;
    cursor: pointer;

    @media(max-width: 380px){
        width: 250px;
        heigth: auto; 
    }
 `

export const Button2 = styled.button  `
    width: 400px;
    min-width: 100px;
    min-height: 60px;
    height: 300px;
    background-image: url(${kitty});
    background-size:cover;
    background-position: center;
    outline: none;
    border: dotted black;
    margin: 20px;
    border-radius: 20px;
    transition: all 500ms ease-out;
    cursor: pointer;

    @media(max-width: 380px){
        width: 250px;
        heigth: auto; 
    }
 `
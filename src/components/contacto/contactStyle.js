import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;

    @media(max-width:780px){
        .container{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;
            align-items: center;
            justify-content: center;
            margin-bottom: 150px;
        }

    `

export const H1 = styled.h1 `
    font-size: 30px;
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Form = styled.div `
    display: flex;
    flex-direction: column;
 `

export const Formulario = styled.div  `
    display: flex;
    flex-direction: column;
    min-width: 200px;

    @media(max-width: 380px){
        margin: 0;
        padding: 0;
        width: 100%;
        heigth: auto; 
        justify-content: center;
        align-items: center;
    }
 `


export const Input = styled.input  `
    min-width: 200px;
    margin:10px; 
    width: 300px;
    height: 40px;
    border: 2px solid #4040dc;
    border-radius: 20px;
    outline: 0;
    text-align: center;

    @media(max-width: 380px){
        width: 245px;
    }
 `


export const Button = styled.button `
    width: 300px;
    height: 40px;
    outline: 0;
    border: 0;
    background-color: #4040dc;
    color: black;
    margin: 10px;

    @media(max-width: 380px){
        width: 245px;
    }
 `


 export const Image = styled.div`
    width: 20%;
    height: 30%;
    background-size: cover;
    background-position: absolute;
    min-width: 5px;
    min-height: 5px;

    @media(max-width: 380px){
        width: 0;
        display: none;
    }
 `
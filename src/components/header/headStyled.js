import styled from 'styled-components';
import img from '../../img/compu.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 95vh;
    background-color: #4040dc;

    @media(max-width: 780px){
        width: 100%;
        heigth: auto;
        display: flex;
    }
 `

export const HeaderCont = styled.div `
    width: 50%;
    height: auto;
    background-color: #4040dc;
    display: flex;
    padding: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;

    @media(max-width: 780px){
        jutify-content: center;
        align-items: center;
        width: 100%;
    }
`


export const H1 = styled.h1 `
    margin: 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align:center;
    font-size: 50px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    `

export const H2 = styled.h2 `
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 18px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    `

export const Img = styled.div `
    width: 65%;
    height: 95vh;
    background-color: #4040dc;
    background-image: url(${img});
    background-size: cover;
    background-position: absolute;
    display: flexbox;
    overflow: hidden;
    justify-content: center;
    flex-direction: column;
    align-items: center; 

    @media(max-width: 780px){
        display: none;
        width: 0;
    }
`
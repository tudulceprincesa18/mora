import styled from 'styled-components';

export const Cont = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 780px){
    margin-top: 100px;
    margin-bottom: 100px;
    width: 100%;
    height: auto;
  }

  @media(max-width: 380px){
    margin-top: 100px;
    margin-bottom: 100px;
    width: 100%;
    heigth: 800px;
  }
  `

export const H1 = styled.h1 `
  font-size: 30px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Section = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  margin: 40px;

  @media(max-width: 780px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 380px){
    grid-template-columns: repeat(1, 1fr);
  }
  `

export const One = styled.div `
  grid-column: 1/3;
  grid-row: 1;
  font-size: 20px;
  margin: 100px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
  @media(max-width: 780px){
    grid-column: 1/2;
    grid-row: 1;
  }

  @media(max-width: 380px){
    grid-column: 1/1;
    grid-row: 1;
  }
 
  `

export const Two = styled.div `
  grid-column: 2/3;
  grid-row: 1;
  font-size: 20px;
  margin: 100px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  @media(max-width: 780px){
    grid-column: 2/2;
    grid-row: 1;
  }

  @media(max-width: 380px){
    grid-column: 1/1;
    grid-row: 2;
  }
  `

export const Three = styled.div `
  grid-column: 3/3;
  grid-row: 1;
  margin: 100px;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  @media(max-width: 780px){
    grid-column: 1/2;
    grid-row: 2;
  }

  @media(max-width: 380px){
    grid-column: 1/1;
    grid-row: 3;
  }
  `

export const Four = styled.div `
  grid-column: 1/3;
  grid-row: 2;
  font-size: 20px;
  margin: 100px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  @media(max-width: 780px){
    grid-column: 2/2;
    grid-row: 2;
  }

  @media(max-width: 380px){
    grid-column: 1/1;
    grid-row: 4;
  }
  
  `

export const Five = styled.div `
  grid-column: 2/3;
  grid-row: 2;
  font-size: 20px;
  margin: 100px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  @media(max-width: 780px){
    grid-column: 1/2;
    grid-row: 3;
  }

  @media(max-width: 380px){
    grid-column: 1/1;
    grid-row: 5;
  }
  `

export const Six = styled.div `
  grid-column: 3/3;
  grid-row: 2;
  font-size: 20px;
  margin: 100px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  @media(max-width: 780px){
    grid-column: 2/2;
    grid-row: 3;
  }

  @media(max-width: 380px){
    grid-column: 1/1;
    grid-row: 6;
  }
  `

export const Seven = styled.div `
  grid-column: 1/3;
  grid-row: 3;
  font-size: 20px;
  margin: 100px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
  @media(max-width: 780px){
    grid-column: 1/2;
    grid-row: 4;
  }

  @media(max-width: 380px){
    grid-column: 1/1;
    grid-row: 7;
  }
 
  `

export const Eigth = styled.div `
  grid-column: 2/3;
  grid-row: 3;
  font-size: 20px;
  margin: 100px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  @media(max-width: 780px){
    grid-column: 2/2;
    grid-row: 4;
  }

  @media(max-width: 380px){
    grid-column: 1/1;
    grid-row: 8;
  }
  `

export const Nine = styled.div `
  grid-column: 3/3;
  grid-row: 3;
  font-size: 20px;
  margin: 100px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media(max-width: 780px){
    grid-column: 1/2;
    grid-row: 5;
  }

  @media(max-width: 380px){
    grid-column: 1/1;
    grid-row: 9;
  }
  `

/*

@media(max-width: 780px){
  .cont{
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(80px, auto);
    margin: 40px;
  }

  .one{
    grid-column: 1/2;
    grid-row: 1;
  }

  .two{
    grid-column: 2/2;
    grid-row: 1;
  }

  .three{
    grid-column: 1/2;
    grid-row: 2;
  }

  .four{
    grid-column: 2/2;
    grid-row: 2;
  }

  .five{
    grid-column: 1/2;
    grid-row: 3;

  }

  .six{
    grid-column: 2/2;
    grid-row: 3;
  }

  .seven{
    grid-column: 1/2;
    grid-row: 4;
  }

  .eigth{
    grid-column: 2/2;
    grid-row: 4;
  }

  .nine{
    grid-column: 1/2;
    grid-row: 5;
  }
}

*/
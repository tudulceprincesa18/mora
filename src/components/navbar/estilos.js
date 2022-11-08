import styled from 'styled-components';

export const Contenedor = styled.div`
    background-color: #4040dc;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 30px;
    color: white;
    background-position: absolute;

`
export const Nav = styled.div`
    justify-content: center;

    @media(max-width: 380px){
      display: flex;
      margin-top: 100px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      heitgh: auto;
    }
`

  export const Button = styled.button`
    text-decoration: none;
    width: 100px;
    height: 40px;
    background-color: #4040dc;
    color: white;
    font-size: 20px;
    display: inline-block;
    border: none;
    outline:none;
    margin-right: 50px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    @media(max-width: 380px){
      margin: 10px;
    }
  `

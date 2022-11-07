import styled from 'styled-components';
import img2 from '../../img/yas.svg';

export const Text = styled.p`
  width: 40%;
  heigth: 100%;
  text-align: center;
  display: flex;

`
export const Button = styled.button`
  margin: 20px; 
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #4040dc;
  cursor:pointer;
`
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;

  @media(max-width: 780px){
    display:flex;
    flex-direction: column;
  }

`

export const Div = styled.div`
margin: 0;
padding: 0;
width: 70%;
height: 450px;
background-image: url(${img2});
background-size: cover;
display:flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
border-radius:10px;


@media(min-width: 768px){
  width:100%;
  heigth: auto;
  display: flex;
  flex-direction: column;
  justify-content:center;

  @media(max-width: 380px;){
    justify-content:center;
  }
`

export const Container = styled.div`
  width: 100%;
  heigth: 100vh; 
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 200px;
  overflow: hidden;

  @media(max-width: 768px){
    width:110%;
    heigth: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-self: center;
    margin-bottom: 200px;
    padding:0;
}

@media(max-width: 380px){
  width: 100%;
  heigth: auto;
  justify-content: center;
  align-items: center; 
}
` 
export const H1 = styled.p`
  font-size: 20px;
  text-align:center;
  display: flex; 
`
export const Column = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
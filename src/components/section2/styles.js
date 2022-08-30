import styled from 'styled-components';

import myImg from '../../images/compu.png';

export const Text = styled.p`
  width: 400px;
  heigth: 500px;
  text-align: center;
  display: flex;
`

export const Image = styled.image`
  width: 400px;
  heigth: 500px;
  background-image: url(${myImg});
`
export const Container = styled.div`
  width: 100%;
  heigth: 500px;
  margin: 50px; 
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 40px;

  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
}

@media(max-width: 300px){
    display: flex;
    flex-direction: column;
}
` 
export const H1 = styled.h1`
  font-size: 20px;
  text-align:center;
`
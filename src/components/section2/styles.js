import styled from 'styled-components';

export const Text = styled.p`
  width: 40%;
  heigth: 100%;
  text-align: center;
  display: flex;
`
export const Div = styled.div`
margin: 0;
padding: 0;
width: 30%;
height: 450px;
background-image: url('https://i.pinimg.com/564x/d7/0e/19/d70e19825501c17e87f19981df2b4004.jpg');
background-size: cover;
display:flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
border-radius:10px;
@media(max-width: 768px){
  width:50%;
  heigth: 300px;
  display: flex;
  align-items: flex-start;

`

export const Container = styled.div`
  width: 100%;
  heigth: 500px;
  margin: 50px; 
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  margin-bottom:0;
  @media(max-width: 768px){
    width:190%;
    heigth: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:0;
    padding:0;
}

@media(max-width: 300px){
  width: 250px; 
  display: flex;
  flex-direction: column;
}
` 
export const H1 = styled.p`
  font-size: 20px;
  text-align:center;
  display: flex; 
  padding: 30px;
`
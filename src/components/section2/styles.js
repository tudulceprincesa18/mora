import styled from 'styled-components';

export const Text = styled.p`
  width: 40%;
  heigth: 100%;
  text-align: center;
  display: flex;
  @media(max-width: 768px){
    width:50%;
    heigth: 300px;
    display: flex;
    justify-content:center;
`
export const Div = styled.div`
margin: 0;
padding: 0;
width: 30%;
height: 450px;
background-image: url('https://thenounproject.com/api/private/icons/3916067/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjZCV2us388aXIqoW_jFttaYa_LBDQb5qoA0KAk8uOTTWhHjoVnPiq0Y8eukLW7wUyxzzYIhJhtKGI4oMhszUkc5r-rA%3D%3D');
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
  justify-content:center;
  background-position: center;

  @media(max-width: 300px;){
    width: 90%;
    heigth: 80%;
  }
`

export const Container = styled.div`
  width: 100%;
  heigth: 900px;
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
    justify-content:center;
    margin:0;
    padding:0;
}

@media(max-width: 300px){
  width: 250px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
}
` 
export const H1 = styled.p`
  font-size: 20px;
  text-align:center;
  display: flex; 
  padding: 30px;
`
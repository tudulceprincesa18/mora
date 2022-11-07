import React from 'react';

import { Container, P, Button1, Button2, Buttons} from './sectionStyles.js';



function Section() {
    return(
      <Container id="proyectos"> 
      <P> Algunos de mis proyectos </P>
      <Buttons>
      <Button1>
       <a href='https://entropica.netlify.app/'> Entropica </a>
      </Button1>
      <Button2>
       <a href='https://criptokitty.netlify.app/'> Cripto-monedas  </a>
      </Button2>
      </Buttons>
      </Container>
    );
  }
  
  export default Section;
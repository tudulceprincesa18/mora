import React from 'react';

import { Container, P, Button, Buttons} from './sectionStyles.js';



function Section() {
    return(
      <Container id="proyectos"> 
      <P> Some of my proyects </P>
      <Buttons>
      <Button>
       <a href='https://entropica.netlify.app/'> Entropica </a>
      </Button>
      <Button>
       <a href='https://criptokitty.netlify.app/'> Cripto-currency  </a>
      </Button>
      </Buttons>
      </Container>
    );
  }
  
  export default Section;
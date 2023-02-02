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
      <Button>
       <a href='https://ubiquitous-lily-6776a5.netlify.app/'> Task-list  </a>
      </Button>
      <Button>
       <a href='https://meme-generator3000.netlify.app/'> Meme generator  </a>
      </Button>
      <Button>
        <a href='https://main--lucent-kangaroo-b78709.netlify.app/'> Javascript dictionary </a>
      </Button>
      </Buttons>
      </Container>
    );
  }
  
  export default Section;
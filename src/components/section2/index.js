import React from 'react';

import { H1 , Container, Div, Text, Button, ButtonGroup, Column} from './styles';
import ingles from '../../cv/ingles.pdf';
import español from '../../cv/español.pdf';

const Section2 = () => {
    return (
      <Container id='sobremi'>
        <Div> </Div>
        <Column>
        <Text>
          <H1> Principalmente me desempeño con React.js pero tambien soy capaz de trabajar con diversas herramientas 
            complementarias, tales como Styled-Components, Material-ui, Bootstrap, Swiper.js, 
            react-route, react testing library y typescript. 
          </H1>
          </Text>
          <ButtonGroup>
            <Button> <a href={ ingles } download target="_blank" rel="noreferrer"> Cv ingles </a></Button>
            <Button> <a href={ español } download target="_blank" rel="noreferrer"> Cv español </a></Button>
        </ButtonGroup>
        </Column>
      </Container>
    );
  };

export default Section2;
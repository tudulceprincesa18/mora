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
          <H1> I'm a frontend developer, i count with diferent tools to work with in addition to react.
             Tools like Styled components, Chakra, Typescript, React-route, React testing library and diferent
             libraries for vanilla javascript.
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
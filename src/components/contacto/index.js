import React from 'react';

import { Container, Formulario, H1, Form, Input, Button, Image} from './contactStyle';

const Contacto = () => {
    return (
        <Container id="contacto">
            <Formulario>
            <H1> Contact me! </H1>
            <form action="https://formsubmit.co/yasmartins999@gmail.com" method="POST">
                <Form>
                    <Input type="text" placeholder="Name" name="name" required/>
                    <Input type="email" placeholder="Email" name="email" required/>
                    <Input type="text" placeholder="Message" name="message" required/>
                    <Button type="submit">Submit</Button>
                </Form>
            </form>
            </Formulario>
            <Image>
                <img alt="imagen" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVyq1mn-dF7Gfr2rs0KqyKY7hL1uyGKmhWGJT2AMMNrjM_fNO'/>
            </Image>
        </Container>
    );
};

export default Contacto;
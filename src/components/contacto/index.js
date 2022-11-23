import React from 'react';

import { Container, Formulario, H1, Form, Input, Button, Image} from './contactStyle';

const Contacto = () => {
    return (
        <Container id="contacto">
            <Formulario>
            <H1>Contacto</H1>
            <form action="https://formsubmit.co/yasmartins999@gmail.com" method="POST">
                <Form>
                    <Input type="text" placeholder="Nombre" name="name" required/>
                    <Input type="email" placeholder="Correo electronico" name="email" required/>
                    <Input type="text" placeholder="Mensaje" name="message" required/>
                    <Button type="submit">Enviar</Button>
                </Form>
            </form>
            </Formulario>
            <Image>
                <img alt="imagen" src='https://us.123rf.com/450wm/martialred/martialred1703/martialred170300026/74131554-sobre-de-mensaje-o-sobre-de-carta-de-carta-delgada-icono-de-vector-de-arte-para-aplicaciones-y-sitio.jpg?ver=6'/>
            </Image>
        </Container>
    );
};

export default Contacto;
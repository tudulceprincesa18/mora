import React from 'react'
import { Contenedor, Button, Nav } from './estilos';

const Navbar = () => {
    return (
      <Contenedor>
           <Nav>
             <Button><a href='#sobremi'>Sobre mi</a></Button>
             <Button><a href='#contacto'>Contacto</a></Button>
             <Button><a href='#proyectos'>Proyectos</a></Button>
           </Nav>
      </Contenedor>
    );
  };

export default Navbar;
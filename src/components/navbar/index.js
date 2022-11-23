import React from 'react';

import { Contenedor, Button, Nav } from './estilos';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
      <Contenedor>
           <Nav>
             <Button><Link to='sobremi' spy={true} smooth={true} offset={50} duration={500}>Sobre mi</Link></Button>
             <Button><Link to='contacto' spy={true} smooth={true} offset={50} duration={500}>Contacto</Link></Button>
             <Button><Link to='proyectos' spy={true} smooth={true} offset={50} duration={500}>Proyectos</Link></Button>
           </Nav>
      </Contenedor>
    );
  };

export default Navbar;
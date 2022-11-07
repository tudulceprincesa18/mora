import { React, useEffect } from 'react';
import { gsap } from 'gsap';


import {Container, HeaderCont, H1, H2, Img } from './headStyled';


function Header() {
  useEffect( () =>{
    const Titulo = document.querySelector('#titulo');
    const Texto = document.querySelector('#texto');
    const Imagen = document.querySelector('#imagen');
    gsap.from(Titulo, { opacity:0, y:100, duration: 1 });
    gsap.from(Texto, { opacity:0, y: -100, duration:1 });
    gsap.from(Imagen, { stagger:0.3 ,opacity: 0, x: 100, duration:1 });
  },[])
    return(
      <Container>
        <HeaderCont>
        <H1 id="titulo"> Soy Yasmin Martins. </H1>
        <H2 id="texto"> Frontend developer de buenos aires, argentina. </H2>
          </HeaderCont>
          <Img id="imagen"> </Img>
      </Container>
    );
  }
  
  export default Header;
import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from '../../assets/money_animate.json'
// import NavbarExterna from '../../components/NavbarExterna';
import { Container, Title, Description, Buttons } from './styles';

export default function Index() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Container>
      <Title>Bem Vindo</Title>
      <Description>
        Controle as suas finanças de maneira fácil, <br/> entre e experimente
      </Description>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        style={{marginTop: 30}}
      />
      <Buttons>
        <Link to="/login">
          Faça seu login
        </Link>
        <Link to="/cadastro">
            Crie sua conta
        </Link>
      </Buttons>

    </Container>
  );
}

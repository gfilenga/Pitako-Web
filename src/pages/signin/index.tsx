import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, BackGround } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <h1>Pitako</h1>

      <form>
        <h2>Faça seu login</h2>

        <input placeholder="Username" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="create">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <BackGround />
  </Container>
);

export default SignIn;

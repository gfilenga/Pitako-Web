import React from 'react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, BackGround } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <h1>Pitako</h1>

      <form>
        <h2>Faça seu login</h2>

        <Input name="username" icon={FiUser} placeholder="Username" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

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

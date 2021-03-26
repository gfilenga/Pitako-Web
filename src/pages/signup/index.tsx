import React from 'react';
import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, BackGround } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: unknown): void {
    console.log(data);
  }

  return (
    <Container>
      <BackGround />
      <Content>
        <h1>Pitako</h1>
        <h2>Web</h2>

        <Form onSubmit={handleSubmit}>
          <h2>Faça seu cadastro</h2>

          <Input name="username" icon={FiUser} placeholder="Username" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="create">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;

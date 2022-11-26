import React from 'react';
import {
  RegisterTitle,
  RegisterFormContainer,
  RemoveForm,
  ShadowDiv,
  RegisterLabel,
  RegisterInput,
  RegisterAgree
} from './style';

const RegisterForm: React.FC = () => {
  return (
    <ShadowDiv>
      <RegisterFormContainer>
        <RemoveForm id="close-form" />
        <RegisterTitle>Criar Registro</RegisterTitle>
        <RegisterLabel htmlFor="name" className="register-label">
          Nome completo
        </RegisterLabel>
        <RegisterInput placeholder="Nome" type="text" name="" id="name" />
        <RegisterLabel htmlFor="email" className="register-label">
          E-mail
        </RegisterLabel>
        <RegisterInput placeholder="Email" type="email" name="" id="email" />
        <RegisterLabel htmlFor="login">Login</RegisterLabel>
        <RegisterInput placeholder="Login" type="text" name="" id="login" />
        <RegisterLabel htmlFor="password">Senha</RegisterLabel>
        <RegisterInput
          placeholder="*********"
          type="password"
          name=""
          id="password"
        />
        <RegisterLabel htmlFor="game-select">Selecione seu jogo:</RegisterLabel>
        <RegisterInput
          type="list"
          name=""
          id="game-select"
          className="register-input"
        />
        <div className="register-agree">
          <RegisterAgree type="checkbox" name="" id="agree" />
          <label htmlFor="agree" className="">
            Estou de acordo com as regras do campeonato
          </label>
        </div>
        <button className="" type="submit">
          Inscrever-se
        </button>
      </RegisterFormContainer>
    </ShadowDiv>
  );
};

export default RegisterForm;

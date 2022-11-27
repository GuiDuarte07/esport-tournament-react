import React, { useState } from 'react';
import {
  RegisterTitle,
  RegisterFormContainer,
  RemoveForm,
  ShadowDiv,
  RegisterLabel,
  RegisterInput,
  RegisterAgree,
  RegisterSelect,
  RegisterAgreeContainer,
  RegisterFormSubmit
} from './style';

const RegisterForm: React.FC<{ setFalse: () => void }> = ({ setFalse }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [gameSelected, setGameSeleceted] =
    useState<string>('League Of Legends');
  const [agree, setAgree] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!agree) return;
    console.log({ name, email, login, password, gameSelected });
    setFalse();
  };

  return (
    <ShadowDiv>
      <RegisterFormContainer onSubmit={(e) => handleSubmit(e)}>
        <RemoveForm>
          <img
            src="/images/close-button-svgrepo-com.svg"
            alt="fechar cadastro"
            srcSet=""
          />
        </RemoveForm>
        <RegisterTitle>Criar Registro</RegisterTitle>
        <RegisterLabel htmlFor="name" className="register-label">
          Nome completo
        </RegisterLabel>
        <RegisterInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          type="text"
          name=""
          id="name"
        />
        <RegisterLabel htmlFor="email" className="register-label">
          E-mail
        </RegisterLabel>
        <RegisterInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          name=""
          id="email"
        />
        <RegisterLabel htmlFor="login">Login</RegisterLabel>
        <RegisterInput
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Login"
          type="text"
          name=""
          id="login"
        />
        <RegisterLabel htmlFor="password">Senha</RegisterLabel>
        <RegisterInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*********"
          type="password"
          name=""
          id="password"
        />
        <RegisterLabel htmlFor="game-select">Selecione seu jogo:</RegisterLabel>
        <RegisterSelect
          onChange={(e) => setGameSeleceted(e.target.value)}
          name=""
          id="game-select"
        >
          <option value="League Of Legends">League Of Legends</option>
          <option value="FIFA2022">FIFA2022</option>
          <option value="Apex Legends">Apex Legends</option>
          <option value="CSGO">CSGO</option>
          <option value="Fortnine">Fortnine</option>
          <option value="Valorant">Valorant</option>
        </RegisterSelect>
        <RegisterAgreeContainer>
          <RegisterAgree
            onChange={() => setAgree((prev) => !prev)}
            type="checkbox"
            name=""
            id="agree"
          />
          <label htmlFor="agree" className="">
            Estou de acordo com as regras do campeonato
          </label>
        </RegisterAgreeContainer>
        <RegisterFormSubmit>Inscrever-se</RegisterFormSubmit>
      </RegisterFormContainer>
    </ShadowDiv>
  );
};

export default RegisterForm;

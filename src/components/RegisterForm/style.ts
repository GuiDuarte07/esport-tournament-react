import styled from 'styled-components';

export const ShadowDiv = styled.div`
  z-index: 999999;
  inset: 0;
  background-color: rgba(128, 128, 128, 0.753);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterFormContainer = styled.form`
  display: flex;
  background-color: rgb(24, 24, 24);
  flex-direction: column;
  width: 800px;
  border-radius: 6px;
  padding: 30px 8px;
  gap: 4px;
  font-family: 'Courier New', Courier, monospace;
  position: relative;
`;

export const RemoveForm = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 18px;
  height: 18px;
  cursor: pointer;

  &::after {
    content: '\274c'; /* use the hex value here... */
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
`;

export const RegisterTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const RegisterLabel = styled.label`
  font-size: 1.1rem;
`;

export const RegisterInput = styled.input`
  background-color: inherit;
  border-bottom: 1px solid rgb(133, 138, 133);
  /*   border-radius: 4px; */
  width: 70%;
  padding-left: 4px;
  height: 2rem;

  &:focus {
    outline: none;
    border: 2px solid rgb(134, 233, 134);
  }
`;

export const RegisterAgree = styled.input`
  display: flex;
  align-items: center;
  margin: 8px 0;
  gap: 4px;
`;

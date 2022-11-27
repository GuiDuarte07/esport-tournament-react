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
  gap: 16px;
  font-family: 'Courier New', Courier, monospace;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const RemoveForm = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;

  @media (max-width: 768px) {
    top: 40px;
    right: 8px;
  }

  & > img {
    position: absolute;
    inset: 0;
    /* width: 18px;
    height: 18px; */
  }
`;

export const RegisterTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: bold;
  margin-top: 8px;
`;

export const RegisterLabel = styled.label`
  font-size: 1.1rem;
`;

export const RegisterInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgb(133, 138, 133);
  outline: none;
  /*   border-radius: 4px; */
  width: 70%;
  padding-left: 4px;
  height: 1.5rem;
  transition: all 0.1s ease;

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(134, 233, 134);
    font-size: 1.05rem;
  }
`;

export const RegisterAgreeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > label {
    cursor: pointer;
  }
`;

export const RegisterAgree = styled.input`
  display: flex;
  align-items: center;
  margin: 8px 0;
  gap: 4px;
  cursor: pointer;
`;

export const RegisterSelect = styled.select`
  background-color: transparent;
  padding: 2px 4px;
  width: fit-content;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;

  & > option {
    background-color: black;
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

export const RegisterFormSubmit = styled.button.attrs({ type: 'submit' })`
  width: fit-content;
  height: fit-content;
  padding: 8px 12px;
  border: 1px solid white;
  background-color: black;
  align-self: center;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

import styled from 'styled-components';

export const InscribeBtnStyle = styled.button`
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 6px;
  background-color: rgba(247, 243, 243, 0.9);
  border: 3px solid rgba(247, 243, 243, 0.6);
  font-weight: bold;
  color: black;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: rgb(39, 18, 63);
    border-color: rgb(235, 35, 82);
    color: white;
  }
`;

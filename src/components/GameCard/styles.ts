import styled from 'styled-components';

export const GameImg = styled.img`
  min-width: 300px;
  height: 160px;
  border: 2px solid rgba(255, 255, 255, 0.651);
  border-radius: 10px;
  margin-right: 50px;
  cursor: pointer;
`;

export const Games = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(170, 167, 167, 0.493);

  &:hover {
    scale: 1.01;
  }

  &:hover ${GameImg} {
    filter: blur(0.8px) brightness(85%);
  }
`;

export const GameDescription = styled.div`
  & > h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 2px;
    margin-bottom: 20px;
  }
`;

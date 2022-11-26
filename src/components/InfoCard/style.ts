import styled from 'styled-components';

export const InfoCardContainer = styled.div`
  min-width: 120px;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid rgba(128, 128, 128, 0.404);
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 2.5rem;
  gap: 3px;
  height: fit-content;
`;

export const InfoCardTitle = styled.h3`
  color: gray;
  margin: 0;
  font-size: 1.05rem;
`;

export const InfoCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoCardDesc = styled.h3`
  font-size: 0.85rem;
  font-weight: 500;
  color: rgb(219, 213, 213);
  margin: 0;
`;

export const InfoCardImg = styled.img`
  width: 18px;
  height: 18px;
`;

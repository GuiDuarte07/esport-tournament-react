import styled from 'styled-components';

export const TimerContainer = styled.div`
  width: 100vw;
  background-color: rgb(39, 18, 63);
  padding: 16px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const TimerSection = styled.section`
  max-width: 880px;
  min-width: 880px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: 100%;
    flex-direction: column;
    gap: 10px;
  }
`;

export const TimerSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  gap: 4px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    gap: 4px;
    color: aqua;
  }
`;

export const TimerTag = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > p {
    font-size: 0.6rem;
  }
`;

export const TimerCount = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TimerRest = styled.div`
  max-width: 300px;
`;

export const TimerRestTitle = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 4px;
  text-align: center;
`;

export const TimerRestText = styled.p`
  font-size: 0.8rem;
  max-width: 200px;
  text-align: center;
`;

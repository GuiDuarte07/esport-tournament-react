import styled from 'styled-components';

export const InfoCardsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const GlobalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainContainer = styled.main`
  background-color: black;
  max-width: 880px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding-bottom: 25px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    overflow-x: hidden;
  }
`;

export const Sections = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;

export const IntroducionTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  max-width: 450px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

export const IntroducionTitleMargin = styled(IntroducionTitle)`
  z-index: 100;
  margin-top: -60px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 0;
    animation: none;
  }
`;

export const Section2 = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const IntroductionVideo = styled.div`
  width: 300px;
  height: 200px;
  background-color: aqua;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 180%;
  }
`;

export const IntroductionVideoPlay = styled.div`
  z-index: 111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > {
    width: 30px;
    height: 30px;
    fill: white;

    & > {
      color: white;
      font-size: 0.9rem;
    }
  }
`;

export const IntroductionText = styled.p`
  font-size: 1.05rem;
  max-width: 450px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    text-align: left;
  }
`;

export const ListUl = styled.ul`
  margin-left: 8px;
  & > li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  & li::before {
    display: inline-block;
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: rgb(235, 35, 82);
    margin-right: 6px;
  }
`;

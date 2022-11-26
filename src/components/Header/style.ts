import styled from 'styled-components';

export const FrontSection = styled.section`
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
`;

export const HeaderStyle = styled.header`
  top: 40px;
  position: absolute;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  z-index: 6;
  max-width: 880px;
  min-width: 880px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  height: 150px;
`;

export const BannerImg = styled.img`
  filter: blur(1px);
  width: 100%;
  position: absolute;
  /*height: 100%; */
  object-fit: cover;
  z-index: -1;
`;

export const ShadowContainer = styled.div`
  z-index: 3;
  width: 100%;
  position: absolute;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 2%,
    rgba(255, 255, 255, 0) 30%,
    rgba(235, 235, 235, 0) 70%,
    rgba(0, 0, 0, 1) 98%
  );
`;

export const ShadowContainerY = styled.div`
  z-index: 3;
  width: 100%;
  position: absolute;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 14%,
    rgba(255, 255, 255, 0) 51%,
    rgba(235, 235, 235, 0) 83%,
    rgba(0, 0, 0, 1) 100%
  );
`;

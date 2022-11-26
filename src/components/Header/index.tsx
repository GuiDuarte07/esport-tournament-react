import React from 'react';
import InscribeBtn from '../InscribeBtn';
import {
  BannerImg,
  FrontSection,
  HeaderContainer,
  HeaderStyle,
  LogoImg,
  ShadowContainer,
  ShadowContainerY
} from './style';

const Header = (): JSX.Element => {
  return (
    <FrontSection>
      <HeaderStyle>
        <HeaderContainer>
          <LogoImg
            src="/images/logo-game-tournament.png"
            alt="logo campeonato"
            srcSet=""
          />
          <InscribeBtn>Quero me inscrever</InscribeBtn>
        </HeaderContainer>
      </HeaderStyle>
      <BannerImg
        src="/images/eSports-Jamie-McInall_01.png"
        alt="imagem de um jogador"
        srcSet=""
      />
      <ShadowContainer />
      <ShadowContainerY />
    </FrontSection>
  );
};

export default Header;

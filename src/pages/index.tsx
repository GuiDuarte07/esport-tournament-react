import React, { useContext } from 'react';
import { AppContext, IContextType } from '../components/Context/AppContext';
import GameCard from '../components/GameCard';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import RegisterForm from '../components/RegisterForm';
import Timer from '../components/Timer';
import {
  GlobalContainer,
  InfoCardsContainer,
  IntroducionTitleMargin,
  IntroductionContainer,
  IntroductionText,
  IntroductionVideo,
  IntroductionVideoPlay,
  ListUl,
  MainContainer,
  Section2,
  Sections
} from '../style';
import { gameData } from '../utils/GameData';

const Home: React.FC = () => {
  const { showRegisterForm, setShowRegisterForm } = useContext(
    AppContext
  ) as IContextType;

  const setFalse = (): void => {
    setShowRegisterForm(false);
  };

  return (
    <GlobalContainer>
      {showRegisterForm && <RegisterForm setFalse={setFalse} />}
      <Header />
      <MainContainer>
        <Sections>
          <IntroducionTitleMargin>
            Escolha seu jogo e faça sua história.
          </IntroducionTitleMargin>
          <InfoCardsContainer>
            <InfoCard
              desc="Ativo"
              title="Status competição"
              src="/images/circle-svgrepo-com.svg"
            />
            <InfoCard
              desc="30 de dezembro, 14:00"
              title="Prazo inscrição"
              src="/images/calendar-symbol-svgrepo-com.svg"
            />
            <InfoCard
              desc="R$ 2500,00"
              title="Premiação"
              src="/images/trophy-svgrepo-com.svg"
            />
          </InfoCardsContainer>
          <Timer />
        </Sections>
        <Section2>
          <IntroductionContainer>
            <IntroductionVideo>
              <img
                src="/images/eSports-Jamie-McInall_01.png"
                alt=""
                srcSet=""
              />
              <IntroductionVideoPlay>
                <img
                  src="./public/play-button-svgrepo-com.svg"
                  alt=""
                  srcSet=""
                />
                <p>Assistir preview</p>
              </IntroductionVideoPlay>
            </IntroductionVideo>
            <IntroductionText>Resumo da competição</IntroductionText>
          </IntroductionContainer>
          <IntroductionContainer>
            <IntroductionText>
              O Gaming Esports Tournament reune jogadores de todo o pais em
              celebre e anual competição em diversos jogos diferentes. Faça
              parte da nossa história você também, e se prove contra os
              melhores. Abaixo você terá informações sobre taxa de inscrição,
              prazos, regras, localização e, claro, a lista de jogos que nossa
              competição abrangerá esse ano.
            </IntroductionText>
            <IntroductionText>
              Regras para participar da competição:
            </IntroductionText>
            <ListUl>
              <li>Ter 18 ou mais anos (ou com a presença do responsável)</li>
              <li>Ter se registrado em nossa competição</li>
            </ListUl>
            <IntroductionText>Será desclassificado caso:</IntroductionText>
            <ListUl>
              <li>Comprovado que você trapaceou</li>
              <li>Comprovado falsidade ideologica</li>
              <li>Mal comportamento</li>
            </ListUl>
          </IntroductionContainer>
        </Section2>
        <Sections>
          {gameData.map(({ src, title, description }) => (
            <GameCard
              key={src}
              src={src}
              title={title}
              description={description}
            />
          ))}
        </Sections>
      </MainContainer>
    </GlobalContainer>
  );
};

export default Home;

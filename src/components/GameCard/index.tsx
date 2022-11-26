import React from 'react';
import { GameDescription, GameImg, Games } from './styles';

interface SingleGameData {
  src: string;
  title: string;
  description: string;
}

const GameCard: React.FC<SingleGameData> = ({ src, title, description }) => {
  return (
    <Games>
      <GameImg src={src} alt="" srcSet="" />
      <GameDescription>
        <h3>{title}</h3>
        <p>{description}</p>
      </GameDescription>
    </Games>
  );
};

export default GameCard;

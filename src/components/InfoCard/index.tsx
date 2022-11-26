import React from 'react';
/* eslint-disable */
import {
  InfoCardContainer,
  InfoCardContent,
  InfoCardDesc,
  InfoCardImg,
  InfoCardTitle
} from './style';

const InfoCard: React.FC<{ title: string; desc: string; src?: string }> = ({
  title,
  desc,
  src
}) => {
  return (
    <InfoCardContainer>
      <InfoCardTitle>{title}</InfoCardTitle>
      <InfoCardContent>
        {src && <InfoCardImg src={src} />}
        <InfoCardDesc>{desc}</InfoCardDesc>
      </InfoCardContent>
    </InfoCardContainer>
  );
};

export default InfoCard;

/* <div className="card">
              <h3 className="title-card">Status competição</h3>
              <div className="content-card">
                <div className="green-circle" />
                <h3 className="card-desc">Ativo</h3>
              </div>
            </div> */

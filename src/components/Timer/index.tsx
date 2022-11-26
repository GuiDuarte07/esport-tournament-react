import React, { useContext } from 'react';
import { AppContext, IContextType } from '../Context/AppContext';
import InscribeBtn from '../InscribeBtn';
import {
  TimerContainer,
  TimerCount,
  TimerRest,
  TimerRestText,
  TimerRestTitle,
  TimerSection,
  TimerSet,
  TimerTag
} from './style';

const Timer: React.FC = () => {
  const {
    restDay: { days, hours, minutes, seconds }
  } = useContext(AppContext) as IContextType;

  return (
    <TimerContainer>
      <TimerSection>
        <TimerSet>
          <TimerTag>
            <TimerCount id="days" className="timer-count">
              {days < 10 ? '0' + days.toString() : days}
            </TimerCount>
            <p>DIAS</p>
          </TimerTag>
          :
          <TimerTag>
            <TimerCount id="hours" className="timer-count">
              {hours < 10 ? '0' + hours.toString() : hours}
            </TimerCount>
            <p>HORAS</p>
          </TimerTag>
          :
          <TimerTag>
            <TimerCount id="minutes" className="timer-count">
              {minutes < 10 ? '0' + minutes.toString() : minutes}
            </TimerCount>
            <p>MINUTOS</p>
          </TimerTag>
          :
          <TimerTag>
            <TimerCount id="seconds" className="timer-count">
              {seconds < 10 ? '0' + seconds.toString() : seconds}
            </TimerCount>
            <p>SECUNDOS</p>
          </TimerTag>
        </TimerSet>
        <TimerRest>
          <TimerRestTitle>Resta pouco tempo</TimerRestTitle>
          <TimerRestText>
            Não perca a oportunidade de mostrar do que você é capaz!
          </TimerRestText>
        </TimerRest>
        <InscribeBtn>Quero me inscrever</InscribeBtn>
      </TimerSection>
    </TimerContainer>
  );
};

export default Timer;

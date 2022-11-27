import { useEffect, useState } from 'react';

export interface ITimer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function decreaseSecond(restDayProp: ITimer): ITimer {
  const restDay = { ...restDayProp };

  if (restDay.seconds === 0) {
    restDay.seconds = 59;
    if (restDay.minutes === 0) {
      restDay.minutes = 59;
      if (restDay.hours === 0) {
        // Acabou o tempo
      } else {
        restDay.hours--;
      }
    } else {
      restDay.minutes--;
    }
  } else {
    restDay.seconds--;
  }

  return restDay;
}

const useTimer = (EventDate: Date): ITimer => {
  // const eventDay = new Date(2022, 10, 30, 14);
  const today = new Date();

  if (EventDate.getTime() - today.getTime() <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  // get total seconds between the times
  let delta = (EventDate.getTime() - today.getTime()) / 1000;

  // calculate (and subtract) whole days
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  const seconds = Math.round(delta % 60); // in theory the modulus is not required

  const [restDay, setRestDay] = useState({ days, hours, minutes, seconds });

  useEffect(() => {
    const decreaseInterval = setInterval(() => {
      setRestDay(decreaseSecond);
    }, 1000);

    return () => clearInterval(decreaseInterval);
  }, []);

  return restDay;
};

export default useTimer;

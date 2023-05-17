import React, { createContext, ReactNode, useState } from 'react';
import useTimer, { ITimer } from '../../hooks/useTimer';

export interface IContextType {
  showRegisterForm: boolean;
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
  restDay: ITimer;
}
export const AppContext = createContext<IContextType | null>(null);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);
  const restDay = useTimer(new Date(2023, 5, 30, 14));

  const value = { showRegisterForm, setShowRegisterForm, restDay };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

import React, { useContext } from 'react';
import { AppContext, IContextType } from '../Context/AppContext';
import { InscribeBtnStyle } from './style';

const InscribeBtn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setShowRegisterForm } = useContext(AppContext) as IContextType;

  return (
    <InscribeBtnStyle onClick={() => setShowRegisterForm(true)}>
      {children}
    </InscribeBtnStyle>
  );
};

export default InscribeBtn;

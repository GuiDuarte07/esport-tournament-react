import React from 'react';
import AppContextProvider from './components/Context/AppContext';
import Home from './pages';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
};

export default App;

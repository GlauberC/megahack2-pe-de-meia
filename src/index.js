import React from 'react';
import {StatusBar} from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

import {colors} from './styles/mainStyles';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.backgroundDark} />
      <Routes />
    </>
  );
};

export default App;

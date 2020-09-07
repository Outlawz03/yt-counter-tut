import React from 'react';

import { GlobalStyle } from './styles/GlobalStyle';
import { Container } from './styles/Container';

import { Counter } from './components/Counter';

export const App = () => {
  return(
    <>
      <GlobalStyle />  
      <Container>
        <Counter />
      </Container>    
    </>
  );
};
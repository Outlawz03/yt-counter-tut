import React, { useState } from 'react';

import { Card, CardContent } from '../styles/Card';
import { ButtonGroup } from '../styles/StyledButton';

import { Button } from './Button';

export const Counter = () => {
  const [ count, setCount ] = useState(0);

  const clickHandler = value => setCount(count + value);

  return(
    <Card>
      <CardContent>
        <h1>The Amazing Counter!!!</h1>
        <p>{ count }</p>
        <ButtonGroup>
          <Button clickHandler={ () => clickHandler(-10) } message={ '-10' } btnTheme={ 'negative' }/>
          <Button clickHandler={ () => clickHandler(-1) } message={ '-1' } btnTheme={ 'negative' }/>
          <Button clickHandler={ () => clickHandler(1) } message={ '+1' } btnTheme={ 'positive' }/>
          <Button clickHandler={ () => clickHandler(10) } message={ '+10' } btnTheme={ 'positive' }/>   
        </ButtonGroup>
      </CardContent>   
    </Card>
  );
};
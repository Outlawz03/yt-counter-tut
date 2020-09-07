import React from 'react';

import { StyledButton } from '../styles/StyledButton';

export const Button = ({ clickHandler, message, btnTheme}) => 
  <StyledButton btnTheme={ btnTheme } onClick={ clickHandler }>{ message }</StyledButton>;
import React from 'react';
import { ButtonWrapper } from '../styles/buttonStyle';

export const Button = () => (
  <ButtonWrapper>
    LOAD MORE
    <span className="loading">
      <span></span>
    </span>
  </ButtonWrapper>
);

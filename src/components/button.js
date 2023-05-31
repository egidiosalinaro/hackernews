import React from 'react';
import { ButtonWrapper } from '../styles/buttonStyle.js';
import { loadMoreButton } from '../hooks/loadMoreButton.js';

export const Button = () => (
  <ButtonWrapper id="button" onLoadStart={loadMoreButton}>
    LOAD MORE
    <span className="loading">
      <span></span>
    </span>
  </ButtonWrapper>
);

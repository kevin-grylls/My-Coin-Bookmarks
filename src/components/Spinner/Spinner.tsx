import React from 'react';
import { ImgWrapper, ImgContainer } from './Style';

export const Spinner = () => (
  <ImgWrapper>
    <ImgContainer src={`${process.env.PUBLIC_URL}/tail-spin.svg`} />
  </ImgWrapper>
);

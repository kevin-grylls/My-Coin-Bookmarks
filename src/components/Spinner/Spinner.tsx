import React from 'react';
import { ImgWrapper, ImgContainer } from './Style';

export const Spinner = () => (
  <ImgWrapper data-test-id={'spinner'}>
    <ImgContainer src={`${process.env.PUBLIC_URL}/tail-spin.svg`} />
  </ImgWrapper>
);

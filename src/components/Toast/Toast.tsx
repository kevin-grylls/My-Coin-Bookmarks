import React from 'react';
import { Message } from './Style';

export const Toast = ({ message }: { message: string }) => {
  return <Message data-test-id={'toast-popup'}>{message}</Message>;
};

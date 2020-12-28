import React from 'react';
import { cleanup } from '@testing-library/react';
import 'jest-styled-components';
import { Filter } from './Filter';
import { renderComponent } from '../../helpers';

describe('Filters', () => {
  afterEach(cleanup);

  it('should render without crash', () => {
    const { container } = renderComponent(Filter);
    expect(container).toBeTruthy();
  });
});

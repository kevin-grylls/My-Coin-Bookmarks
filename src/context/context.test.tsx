import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as globalContext from './context';

const BaseComponent = () => {
  const {
    page,
    displayRow,
    setPage,
    setDisplayRow,
  } = globalContext.useGlobalContext();

  return (
    <ul>
      <li onClick={() => setPage(page + 1)}>{page}</li>
      <li onClick={() => setDisplayRow(displayRow + 1)}>{displayRow}</li>
    </ul>
  );
};

describe('Global Context', () => {
  let contextValue: any;

  beforeEach(() => {
    contextValue = {
      viewType: 'all',
      currencyType: 'krw',
      page: 1,
      displayRow: 10,
      setViewType: jest.fn(),
      setCurrencyType: jest.fn(),
      setPage: jest.fn(),
      setDisplayRow: jest.fn(),
    };

    jest
      .spyOn(globalContext, 'useGlobalContext')
      .mockImplementation(() => contextValue);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crash', () => {
    expect(
      render(
        <globalContext.ContextProvider>
          <BaseComponent />
        </globalContext.ContextProvider>,
      ),
    ).toBeTruthy();
  });

  it('should have contextValue', () => {
    render(
      <globalContext.ContextProvider>
        <BaseComponent />
      </globalContext.ContextProvider>,
    );

    const pageElement = screen.getByText(contextValue.page);
    expect(pageElement).toHaveTextContent(contextValue.page);

    fireEvent.click(pageElement);
    expect(contextValue.setPage).toHaveBeenCalledTimes(1);
    expect(contextValue.setPage).toHaveBeenLastCalledWith(
      contextValue.page + 1,
    );

    const displayRowElement = screen.getByText(contextValue.displayRow);
    expect(displayRowElement).toHaveTextContent(contextValue.displayRow);

    fireEvent.click(displayRowElement);
    expect(contextValue.setDisplayRow).toHaveBeenCalledTimes(1);
    expect(contextValue.setDisplayRow).toHaveBeenLastCalledWith(11);
  });
});

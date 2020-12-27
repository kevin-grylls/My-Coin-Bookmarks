import { createContext, ReactNode, useContext, useState } from 'react';

interface GlobalContext {
  viewType: string;
  currencyType: string;
  page: number;
  displayRow: number;
  setViewType: Function;
  setCurrencyType: Function;
  setPage: Function;
  setDisplayRow: Function;
}

const defaultValue: GlobalContext = {
  viewType: 'all',
  currencyType: 'krw',
  page: 1,
  displayRow: 10,
  setViewType: (...args: any) => {},
  setCurrencyType: (...args: any) => {},
  setPage: (...args: any) => {},
  setDisplayRow: (...args: any) => {},
};

export const GlobalContext = createContext<GlobalContext>(defaultValue);
GlobalContext.displayName = 'GlobalContext';

export const useGlobalContext = () => useContext(GlobalContext);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const setViewType = (viewType: string) => {
    setState((prevState) => {
      return {
        ...prevState,
        viewType: viewType,
      };
    });
  };

  const setCurrencyType = (currencyType: string) => {
    setState((prevState) => {
      return {
        ...prevState,
        currencyType: currencyType,
      };
    });
  };

  const setPage = (page: number) => {
    setState((prevState) => {
      return {
        ...prevState,
        page: page,
      };
    });
  };

  const setDisplayRow = (perPage: number) => {
    setState((prevState) => {
      return {
        ...prevState,
        displayRow: perPage,
      };
    });
  };

  const initialState = {
    viewType: 'all',
    currencyType: 'krw',
    page: 1,
    displayRow: 10,
    setViewType,
    setCurrencyType,
    setPage,
    setDisplayRow,
  };

  const [state, setState] = useState(initialState);

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

import { createContext, ReactNode, useContext, useState } from 'react';

interface GlobalContext {
  updateCnt: number;
  viewType: string;
  currencyType: string;
  page: number;
  displayRow: number;
  inc: Function;
  setViewType: Function;
  setCurrencyType: Function;
  setPage: Function;
  setDisplayRow: Function;
}

const defaultValue: GlobalContext = {
  updateCnt: 0,
  viewType: 'all',
  currencyType: 'krw',
  page: 1,
  displayRow: 10,
  inc: (...args: any) => {},
  setViewType: (...args: any) => {},
  setCurrencyType: (...args: any) => {},
  setPage: (...args: any) => {},
  setDisplayRow: (...args: any) => {},
};

export const GlobalContext = createContext<GlobalContext>(defaultValue);
GlobalContext.displayName = 'GlobalContext';

export const useGlobalContext = () => useContext(GlobalContext);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const inc = () => {
    setState((prevState) => {
      return {
        ...prevState,
        updateCnt: prevState.updateCnt + 1,
      };
    });
  };

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
    updateCnt: 0,
    viewType: 'all',
    currencyType: 'krw',
    page: 1,
    displayRow: 10,
    inc,
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

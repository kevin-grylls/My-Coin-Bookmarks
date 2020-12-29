import { createContext, ReactNode, useContext, useState } from 'react';

interface GlobalContext {
  updateCnt: number;
  isLoading: boolean;
  isToast: boolean;
  viewType: string;
  currencyType: string;
  page: number;
  displayRow: number;
  inc: Function;
  setIsLoading: Function;
  setToast: Function;
  setViewType: Function;
  setCurrencyType: Function;
  setPage: Function;
  setDisplayRow: Function;
  init: Function;
}

const defaultValue: GlobalContext = {
  updateCnt: 0,
  isLoading: false,
  isToast: false,
  viewType: 'all',
  currencyType: 'krw',
  page: 1,
  displayRow: 50,
  inc: (...args: any) => {},
  setIsLoading: (...args: any) => {},
  setToast: (...args: any) => {},
  setViewType: (...args: any) => {},
  setCurrencyType: (...args: any) => {},
  setPage: (...args: any) => {},
  setDisplayRow: (...args: any) => {},
  init: (...args: any) => {},
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

  const setIsLoading = (isLoading: boolean) => {
    setState((prevState) => {
      return {
        ...prevState,
        isLoading: isLoading,
      };
    });
  };

  const setToast = (isToast: boolean) => {
    setState((prevState) => {
      return {
        ...prevState,
        isToast: isToast,
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

  const init = () => {
    setPage(1);
    setCurrencyType('krw');
    setDisplayRow(50);
  };

  const initialState = {
    isLoading: false,
    isToast: false,
    updateCnt: 0,
    viewType: 'all',
    currencyType: 'krw',
    page: 1,
    displayRow: 50,
    inc,
    setIsLoading,
    setToast,
    setViewType,
    setCurrencyType,
    setPage,
    setDisplayRow,
    init,
  };

  const [state, setState] = useState(initialState);

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

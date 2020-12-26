import { createContext, ReactNode, useState } from 'react';

interface GlobalContext {
    page: number;
    displayRow: number;
    setPage: Function;
    setDisplayRow: Function;
}

const defaultValue: GlobalContext = {
    page: 1,
    displayRow: 10,
    setPage: (...args: any) => {},
    setDisplayRow: (...args: any) => {},
};

export const GlobalContext = createContext<GlobalContext>(defaultValue);
GlobalContext.displayName = 'GlobalContext';

export const ContextProvider = ({ children }: { children: ReactNode }) => {
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
        page: 1,
        displayRow: 10,
        setPage,
        setDisplayRow,
    };

    const [state, setState] = useState(initialState);

    return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};

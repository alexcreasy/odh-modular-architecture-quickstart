import * as React from 'react';

type AppContextProps = object;

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const AppContext = React.createContext({} as AppContextProps);

export const useAppContext = (): AppContextProps => React.useContext(AppContext);

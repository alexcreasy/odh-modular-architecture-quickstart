import * as React from 'react';

export type AppContextType = {
  hello: string;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

//TODO replace with real top level context required by your app.
export const AppContext = React.createContext<AppContextType>({
  hello: 'world',
});

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const hello = 'world';

  return (
    <AppContext.Provider
      value={React.useMemo(
        () => ({
          hello,
        }),
        [hello],
      )}
    >
      {children}
    </AppContext.Provider>
  );
};

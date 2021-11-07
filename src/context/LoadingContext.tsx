import { createContext, ReactElement, useContext, useState } from 'react';

type LoadingState = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<Partial<LoadingState>>({});

const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({
  children,
  initialState,
}: {
  children: ReactElement;
  initialState: boolean;
}) => {
  const [loading, setLoading] = useState(initialState);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider, useLoading };

import React, { useContext, useReducer, useState, useEffect } from 'react';
import reducer from './reducer';
import data from '../utils/data';
import { IReducer } from '../interfaces/appInterfaces';
import IAppInterface from '../interfaces/appInterfaces';

const getStorage = (): IAppInterface[] => {
  const storagedData = localStorage.getItem('entertainment-data');

  if (storagedData) {
    return JSON.parse(localStorage.getItem('entertainment-data')!);
  } else {
    return data;
  }
};

interface IAppContext {
  dispatch: React.Dispatch<IReducer>;
  state: IAppInterface[];
  term: string;
  setTerm: React.Dispatch<string>;
}

const initialState = {
  dispatch: () => {},
  state: data,
  term: '',
  setTerm: () => {},
};

const AppContext = React.createContext<IAppContext>(initialState);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getStorage());
  const [term, setTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('entertainment-data', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ dispatch, state, term, setTerm }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

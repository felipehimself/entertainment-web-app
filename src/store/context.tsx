import React from 'react';
import { useContext, useReducer, useState } from 'react';
import reducer from './reducer';
import data from '../utils/data';
import { IReducer } from '../interfaces/appInterfaces';
import IAppInterface from '../interfaces/appInterfaces';

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
  const [state, dispatch] = useReducer(reducer, data);
  const [term, setTerm] = useState('');

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

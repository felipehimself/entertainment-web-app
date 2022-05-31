import React from 'react';
import { useContext, useReducer } from 'react';
import reducer from './reducer';
import data from '../utils/data';

import IAppInterface from '../interfaces/appInterfaces';

interface IAppContext {
  dispatch: React.Dispatch<any>;
  state: IAppInterface[];
}

const initialState = {
  dispatch: () => {},
  state: data
}

const AppContext = React.createContext<IAppContext>(initialState);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);
  

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

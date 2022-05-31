import IAppInterface from '../interfaces/appInterfaces';
import { IReducer } from '../interfaces/appInterfaces';

const reducer = (state: IAppInterface[], action: IReducer) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_FAVORITE':
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, isFavorite: !item.isFavorite };
        }
        return item;
      });

    default:
      return state;
  }
};

export default reducer;

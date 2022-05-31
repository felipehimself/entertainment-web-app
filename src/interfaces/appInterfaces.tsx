interface IAppInterface {
  name: string;
  category: string;
  type: string;
  year: number;
  isFavorite: boolean;
  isTrending: boolean;
  img: string;
  imgLarge: undefined | string;
  id: number;
}

export interface IReducer {
  type: string;
  payload: { id: number };
}

export default IAppInterface;

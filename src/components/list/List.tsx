import ListCard from './ListCard';
import IAppInterface from '../../interfaces/appInterfaces';
import { Ul } from './styles';

const List: React.FC<{ state: IAppInterface[] }> = ({ state }) => {
  return (
    <Ul>
      {state.map((movie) => {
        return <ListCard {...movie} key={movie.name} />;
      })}
    </Ul>
  );
};

export default List;

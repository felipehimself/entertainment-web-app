import ListCard from './ListCard';
import IAppInterface from '../../interfaces/appInterfaces';
import { Ul } from './styles';
import { useGlobalContext } from '../../store/context';
import H2 from '../../shared/H2';

const List: React.FC<{ state: IAppInterface[] }> = ({ state }) => {
  
  const { term } = useGlobalContext();

  return (
    <>
      <Ul>
        {state
          .filter((item) =>
            item.name.toUpperCase().includes(term.toUpperCase())
          )
          .map((movie) => {
            return <ListCard {...movie} key={movie.name} />;
          })}
      </Ul>
      {state.filter((item) =>
        item.name.toUpperCase().includes(term.toUpperCase())
      ).length === 0 && <H2>No match</H2>}
    </>
  );
};

export default List;

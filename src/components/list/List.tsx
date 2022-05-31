import styled from 'styled-components';
import ListCard from './ListCard';
import IAppInterface from '../../interfaces/appInterfaces';

const List: React.FC<{ state: IAppInterface[] }> = ({ state }) => {
  return (
    <Wrapper>
      {state.map((movie) => {
        return <ListCard {...movie} key={movie.name} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2.2rem;
`;
export default List;

import Container from '../shared/Container';
import H2 from '../shared/H2';
import List from '../components/list/List';
import { useGlobalContext } from '../store/context';

const Movies = () => {
  const { state } = useGlobalContext();
  const movies = state.filter((item)=> item.category === 'movie')

  return (
    <Container>
      <H2>Movies</H2>
      <List state={movies} />
    </Container>
  );
};
export default Movies;

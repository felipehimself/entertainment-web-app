import { useEffect } from 'react';
import Container from '../shared/Container';
import H2 from '../shared/H2';
import List from '../components/list/List';
import { useGlobalContext } from '../store/context';

const Movies = () => {
  const { state, setTerm, term } = useGlobalContext();
  const movies = state.filter((item)=> item.category === 'movie')
  
  useEffect(()=> {
    setTerm('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <Container>
      {term.length > 0 ? <H2>Results</H2> : <H2>Movies</H2>}
      <List state={movies} />
    </Container>
  );
};
export default Movies;

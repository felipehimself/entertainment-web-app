import { useEffect } from 'react';
import Container from '../shared/Container';
import H2 from '../shared/H2';
import List from '../components/list/List';
import { useGlobalContext } from '../store/context';

const TvSeries = () => {
  const { state, setTerm, term } = useGlobalContext();
  const tvSeries = state.filter((item) => item.category === 'TV Series');

  return (
    <Container>
      {term.length > 0 ? <H2>Results</H2> : <H2>TV Series</H2>}
      <List state={tvSeries} />
    </Container>
  );
};
export default TvSeries;

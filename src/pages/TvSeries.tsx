import Container from '../shared/Container';
import H2 from '../shared/H2';
import List from '../components/list/List';
import { useGlobalContext } from '../store/context';

const TvSeries = () => {
  const { state } = useGlobalContext();
  const tvSeries = state.filter((item)=> item.category === 'TV Series')

  return (
    <Container>
      <H2>TV Series</H2>
      <List state={tvSeries} />
    </Container>
  );
}
export default TvSeries
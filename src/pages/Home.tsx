import { useEffect } from 'react';

import Container from '../shared/Container';
import H2 from '../shared/H2';
import List from '../components/list/List';
import { useGlobalContext } from '../store/context';
import Slider from '../components/slider/Slider';

const Home = () => {
  const { state, setTerm, term } = useGlobalContext();

  useEffect(() => {
    setTerm('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(state.length);
  return (
    <>
      <Container>{term.length === 0 && <H2>Trending</H2>}</Container>
      <Slider />
      <Container>
        {term.length > 0 ? <H2>Results</H2> : <H2>Recommended for you</H2>}
        <List state={state} />
      </Container>
    </>
  );
};
export default Home;

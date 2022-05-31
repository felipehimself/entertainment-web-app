import Container from '../shared/Container';
import H2 from '../shared/H2';
import List from '../components/list/List';
import { useGlobalContext } from '../store/context';
import Slider from '../components/slider/Slider';

const Home = () => {
  const { state } = useGlobalContext();
  return (
    <>
      <Slider />
      <Container>
        <H2>Trending</H2>

        <H2>Recommended for you</H2>
        <List state={state} />
      </Container>
    </>
  );
};
export default Home;

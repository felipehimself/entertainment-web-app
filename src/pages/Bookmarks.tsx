import Container from '../shared/Container';
import H2 from '../shared/H2';
import List from '../components/list/List';
import { useGlobalContext } from '../store/context';

const Bookmarks = () => {
  const { state } = useGlobalContext();
  const isVaforite = state.filter((item)=> item.isFavorite === true)

  return (
    <Container>
    <H2>Favorites</H2>
    <List state={isVaforite} />
  </Container>
  )
}
export default Bookmarks
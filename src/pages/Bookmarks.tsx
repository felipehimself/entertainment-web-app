import { useEffect } from 'react';
import Container from '../shared/Container';
import H2 from '../shared/H2';
import List from '../components/list/List';
import { useGlobalContext } from '../store/context';

const Bookmarks = () => {
  const { state, setTerm, term } = useGlobalContext();
  const isVaforite = state.filter((item)=> item.isFavorite === true)

  useEffect(()=> {
    setTerm('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Container>
    {term.length > 0 ? <H2>Results</H2> : <H2>Favorites</H2>}
    <List state={isVaforite} />
  </Container>
  )
}
export default Bookmarks
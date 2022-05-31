import { useGlobalContext } from '../../store/context';
import iconSearch from './../../assets/icons/icon-search.svg';
import * as Style from './styles';

const Header = () => {
  
  const { setTerm, term } = useGlobalContext();

  return (
    <Style.Header>
      <Style.Icon src={iconSearch} alt='search icon' className='search-icon' />
      <Style.Input
        placeholder='Search for Movies or TV Series'
        type='text'
        className='input'
        onChange={(e) => setTerm(e.target.value)}
        value={term || ''}
      />
    </Style.Header>
  );
};

export default Header;

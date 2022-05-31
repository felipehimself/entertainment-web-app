import iconSearch from './../../assets/icons/icon-search.svg';
import * as Style from './styles';

const Header = () => {
  return (
    <Style.Header>
      <Style.Icon src={iconSearch} alt='search icon' className='search-icon' />
      <Style.Input
        placeholder='Search for Movies or TV Series'
        type='text'
        className='input'
      />
    </Style.Header>
  );
};

export default Header;

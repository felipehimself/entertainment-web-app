import styled from 'styled-components';
import STYLES from '../../constants/Styles';
import iconSearch from './../../assets/icons/icon-search.svg';

const Header = () => {
  return (
    <Wrapper>
      <img src={iconSearch} alt='search icon' className='search-icon' />
      <input
        placeholder='Search for Movies or TV Series'
        type='text'
        className='input'
      />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  max-width: 116rem;
  margin: 2.6rem 2rem 0 16rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0 2rem;


  @media screen and (max-width: 1200px) {
    margin: 10rem auto 0 auto;
    
  }


  .search-icon {
    width: 3rem;
  }

  .input {
    padding: 0.8rem 0rem;
    background-color: transparent;
    border: none;
    flex: 1;
    font-size: 2.4rem;
    font-weight: 200;
    border-bottom: 1px solid transparent;
    caret-color: ${STYLES.colors.colorRed};
    color: ${STYLES.colors.colorWhite};
    width: 100%;
    /* pode ser aqui */
  }

  .input:focus {
    outline: none;
    border-bottom: 1px solid rgb(90, 105, 143);
  }
`;
export default Header;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import STYLES from '../../constants/Styles';

import logo from './../../assets/icons/logo.svg';
import homeIcon from './../../assets/icons/icon-nav-home.svg';
import movieIcon from './../../assets/icons/icon-nav-movies.svg';
import tvIcon from './../../assets/icons/icon-nav-tv-series.svg';
import bookMark from './../../assets/icons/icon-nav-bookmark.svg';

const Navbar = () => {
  return (
    <Wrapper>
      <img className='logo' src={logo} alt='logo' />

      <ul className='list'>
        <li className='list-item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'list-item active' : 'list-item'
            }
            to='/'
          >
            <img className='icon' src={homeIcon} alt='' />
          </NavLink>
        </li>
        <li className='list-item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'list-item active' : 'list-item'
            }
            to='/movies'
          >
            <img className='icon' src={movieIcon} alt='' />
          </NavLink>
        </li>
        <li className='list-item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'list-item active' : 'list-item'
            }
            to='/tvshows'
          >
            <img className='icon' src={tvIcon} alt='' />
          </NavLink>
        </li>
        <li className='list-item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'list-item active' : 'list-item'
            }
            to='/bookmarks'
          >
            <img className='icon' src={bookMark} alt='' />
          </NavLink>
        </li>
      </ul>

      <span className='user-icon'>
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          className='sc-jqUVSM dGsXdO'
          height='1.5em'
          width='1.5em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>
            <path fill='none' d='M0 0h24v24H0z'></path>
            <path d='M5 20h14v2H5v-2zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'></path>
          </g>
        </svg>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 90vh;
  position: fixed;
  top: 3.2rem;
  bottom: 3.2rem;
  left: 3.2rem;
  background-color: ${STYLES.colors.colorBlueLight};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3.4rem 3rem;
  z-index: 200;
  
  @media screen and (max-width: 1200px) {
    padding: 3.4rem 2rem ;
    flex-direction: row;
    left: 2rem;
    right: 2rem;
    top: 0;
    height: 0;
    border-radius: 0;

  }

  .logo {
    height: 2.5rem;
    width: 3.2rem;
  }

  .list {
    margin-top: -12rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
  }

  @media screen and (max-width: 1200px) {
    .list {
      flex-direction: row;
      margin-top: 0;
    }
  }


  .list-item {
    text-decoration: none;
    color: transparent;
  }

  .list-item.active .icon {
    filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%)
      hue-rotate(288deg) brightness(102%) contrast(102%);
  }

  .icon {
    width: 2rem;
  }

  .icon:hover {
    filter: brightness(0) saturate(100%) invert(38%) sepia(46%) saturate(4201%)
      hue-rotate(337deg) brightness(103%) contrast(98%);
  }

  .user-icon {
    background-color: #5A698F;
    padding: 0.8rem;
    border-radius: 100%;
    display: grid;
    place-items: center;
  }
`;
export default Navbar;

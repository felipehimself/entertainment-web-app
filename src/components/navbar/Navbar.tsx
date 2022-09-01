import logo from './../../assets/icons/logo.svg';
import homeIcon from './../../assets/icons/icon-nav-home.svg';
import movieIcon from './../../assets/icons/icon-nav-movies.svg';
import tvIcon from './../../assets/icons/icon-nav-tv-series.svg';
import bookMark from './../../assets/icons/icon-nav-bookmark.svg';

import * as Style from './styles';
import { useGlobalContext } from '../../store/context';

const Navbar = () => {
  const { setTerm } = useGlobalContext();

  return (
    <Style.Nav>
      <Style.ImgLogo src={logo} alt='logo' />

      <Style.Ul>
        <Style.Li>
          <Style.Link
            className={({ isActive }) =>
              isActive ? 'list-item active' : 'list-item'
            }
            to='/'
            onClick={()=>setTerm('')}
          >
            <Style.Icon className='icon' src={homeIcon} alt='' />
          </Style.Link>
        </Style.Li>
        <Style.Li>
          <Style.Link
            className={({ isActive }) =>
              isActive ? 'list-item active' : 'list-item'
            }
            to='/movies'
            onClick={()=>setTerm('')}
          >
            <Style.Icon className='icon' src={movieIcon} alt='' />
          </Style.Link>
        </Style.Li>
        <Style.Li>
          <Style.Link
            className={({ isActive }) =>
              isActive ? 'list-item active' : 'list-item'
            }
            to='/tvshows'
            onClick={()=>setTerm('')}
          >
            <Style.Icon className='icon' src={tvIcon} alt='' />
          </Style.Link>
        </Style.Li>
        <Style.Li>
          <Style.Link
            className={({ isActive }) =>
              isActive ? 'list-item active' : 'list-item'
            }
            to='/bookmarks'
            onClick={()=>setTerm('')}
          >
            <Style.Icon className='icon' src={bookMark} alt='' />
          </Style.Link>
        </Style.Li>
      </Style.Ul>

      <Style.UserIcon>
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
      </Style.UserIcon>
    </Style.Nav>
  );
};

export default Navbar;

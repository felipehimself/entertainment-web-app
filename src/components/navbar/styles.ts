import styled from 'styled-components';
import STYLES from '../../constants/Styles';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
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
    padding: 3.4rem 2rem;
    flex-direction: row;
    left: 2rem;
    right: 2rem;
    top: 0;
    height: 0;
    border-radius: 0;
  }
`;

export const ImgLogo = styled.img`
  height: 2.5rem;
  width: 3.2rem;
`;

export const Ul = styled.ul`
  margin-top: -12rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

export const Icon = styled.img`
  width: 2rem;

  :hover {
    filter: brightness(0) saturate(100%) invert(38%) sepia(46%) saturate(4201%)
      hue-rotate(337deg) brightness(103%) contrast(98%);
  }
`;

export const Li = styled.li.attrs((props) => ({
  className: props.className,
}))`
  &.active ${Icon} {
    filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%)
      hue-rotate(288deg) brightness(102%) contrast(102%);
  }

  text-decoration: none;
  color: transparent;
`;

export const UserIcon = styled.span`
  background-color: #5a698f;
  padding: 0.8rem;
  border-radius: 100%;
  display: grid;
  place-items: center;
`;

export const Link = styled(NavLink).attrs((props) => ({
  className: props.className
}))`

  &.active ${Icon} {
    filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%)
      hue-rotate(288deg) brightness(102%) contrast(102%);
  }


`;

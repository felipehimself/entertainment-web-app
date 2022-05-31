import styled from 'styled-components';
import STYLES from '../../constants/Styles';

export const Header = styled.header`
  max-width: 116rem;
  margin: 4rem 2rem 2rem 16rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0 2rem;
  

  @media screen and (max-width: 1200px) {
    margin: 10rem auto 4rem auto;
  }
`;

export const Icon = styled.img`
  width: 3rem;
`;

export const Input = styled.input`
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

  &:focus {
    outline: none;
    border-bottom: 1px solid rgb(90, 105, 143);
  }
`;

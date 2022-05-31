import styled from 'styled-components';
import STYLES from '../../constants/Styles';

export const OuterContainer = styled.div`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 1rem;
  overflow: hidden;

  position: relative;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

export const Container = styled.div`
  position: absolute;
  bottom: 1.4rem;
  left: 1.4rem;
`;

export const ListDetails = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 0.8rem;
`;

export const Li = styled.li`
  font-size: 1.4rem;
  color: ${STYLES.colors.colorWhite};
  opacity: 0.8;
  text-transform: capitalize;
  font-weight: 200;
  display: flex;
  align-items: center;
  gap: 4px;

  &:not(:last-child)::after {
    content: '•';
    margin-right: 4px;
  }
  &:last-child {
    text-transform: uppercase;
  }
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const H3 = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  margin-top: 0.5rem;
  text-align: left;
  color: ${STYLES.colors.colorWhite};
`;

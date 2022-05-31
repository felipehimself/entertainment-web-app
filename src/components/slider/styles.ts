import styled from 'styled-components';
import STYLES from '../../constants/Styles';

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  transition: transform 0.3s ease;
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

export const IconMed = styled.img``;

export const H3 = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  margin-top: 0.5rem;
  text-align: left;
  color: ${STYLES.colors.colorWhite};
`;

export const ContainerPlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.216);
  border-radius: 2.4rem;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const BtnPlay = styled.button`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 1rem 3rem;
  border: none;
  background-color: transparent;
  color: ${STYLES.colors.colorWhite};
  font-size: 1.6rem;
  cursor: pointer;
`;

export const BtnFavorite = styled.button`
  position: absolute;
  top: 0;
  right: 1rem;
  top: 1rem;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.8rem;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  z-index: 100;
`;

export const OuterContainer = styled.div`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: grab;

  :hover ${Img} {
    transform: scale(1.02);
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    background-image: none;
    transition: all 0.3s ease;
  }

  &:hover::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    );
  }
  :hover ${ContainerPlay} {
    opacity: 1;
  }
`;

import styled from 'styled-components';
import STYLES from '../../constants/Styles';

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2.2rem;
`;
export const Article = styled.article``;

export const Img = styled.img`
  display: block;
  width: 100%;
  transition: transform 0.3s ease;
  object-fit: cover;
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

export const ImgContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

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

  :hover ${Img} {
    transform: scale(1.02);
  }

  :hover ${ContainerPlay} {
    opacity: 1;
  }
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

export const Icon = styled.img`
  
  

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

export const H3 = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const ListCard = styled.ul`
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
`;

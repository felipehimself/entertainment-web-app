import styled from 'styled-components';
import IAppInterface from '../../interfaces/appInterfaces';
import STYLES from '../../constants/Styles';

import tvIcon from './../../assets/icons/icon-category-tv.svg';
import movieIcon from './../../assets/icons/icon-category-movie.svg';
import playIcon from './../../assets/icons/icon-play.svg';
import favIcon from './../../assets/icons/icon-bookmark.svg';

const SliderItem: React.FC<IAppInterface> = ({
  imgLarge,
  name,
  category,
  type,
  year,
  isFavorite,
  isTrending,
}) => {
  return (
    <Wrapper>
      <img className='img' src={imgLarge} alt='' />
      <div className="details-container">
        <ul className='details-list'>
          <li className='details-list__item details-list__item--year'>
            {year}
          </li>
          <li className='details-list__item details-list__item--category'>
            {category === 'movie' ? (
              <img className='icon-category' src={movieIcon} alt='' />
            ) : (
              <img className='icon-category' src={tvIcon} alt='' />
            )}
            {category}
          </li>
          <li className='details-list__item details-list__item--type'>
            {type}
          </li>
        </ul>
        <h3 className='name'>{name}</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 1rem;
  overflow: hidden;
  border: none;
  background-color:transparent;
  outline: none;
  cursor: pointer;
  position: relative;
  
  /* @media screen and (max-width: 1100px) {
    width: 44rem;
  }

  @media screen and (max-width: 900px) {
    width: 40rem;
  } */
  

  .img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  .details-container {
    position: absolute;
    bottom: 1.4rem;
    left: 1.4rem;
  }

  .details-list {
    display: flex;
    list-style: none;
    margin-top: 0.8rem;
  }

  .details-list__item {
    font-size: 1.4rem;
    color: ${STYLES.colors.colorWhite};
    opacity: 0.8;
    text-transform: capitalize;
    font-weight: 200;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .icon-category {
    width: 1rem;
    height: 1rem;
  }

  .details-list__item:not(:last-child)::after {
    content: '•';
    margin-right: 4px;
  }

  .details-list__item--type {
    text-transform: uppercase;
  }

  .name {
    font-size: 2.4rem;
    font-weight: 500;
    margin-top: 0.5rem;
    text-align: left;
    color: ${STYLES.colors.colorWhite}
  }

`;
export default SliderItem;

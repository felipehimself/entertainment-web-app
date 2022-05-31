import styled from 'styled-components';
import STYLES from '../../constants/Styles';
import IAppInterface from '../../interfaces/appInterfaces';

import tvIcon from './../../assets/icons/icon-category-tv.svg';
import movieIcon from './../../assets/icons/icon-category-movie.svg';
import playIcon from './../../assets/icons/icon-play.svg';
import favIcon from './../../assets/icons/icon-bookmark.svg';

const ListCard: React.FC<IAppInterface> = ({
  name,
  category,
  type,
  year,
  isFavorite,
  isTrending,
  img,
}) => {
  return (
    <Card>
      <div className='img-container'>
        <img src={img} alt='' className='img' />
        <div className='img-container--play'>
          <button className='play-btn'>
            <img src={playIcon} alt='play button' />
            Play
          </button>
        </div>
        <button className='btn-favorite'>
          <img src={favIcon} alt='play button' />
        </button>
      </div>
      <ul className='details-container'>
        <li className='details-container__item details-container__item--year'>
          {year}
        </li>
        <li className='details-container__item details-container__item--category'>
          {category === 'movie' ? (
            <img className='icon-category' src={movieIcon} alt='' />
          ) : (
            <img className='icon-category' src={tvIcon} alt='' />
          )}{' '}
          {category}
        </li>
        <li className='details-container__item details-container__item--type'>
          {type}
        </li>
      </ul>
      <h3 className='name'>{name}</h3>
    </Card>
  );
};

const Card = styled.article`
  .img-container {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
  }

  .img-container::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    background-image: none;
  }

  .img-container:hover::after {
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

  .img-container .img {
    display: block;
    width: 100%;
    transition: transform 0.3s ease;
    object-fit: cover;
  }

  .img-container:hover .img {
    transform: scale(1.02);
  }

  .img-container--play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.216);
    border-radius: 2.4rem;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .img-container:hover .img-container--play {
    opacity: 1;
  }

  .play-btn {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    padding: 1rem 3rem;
    border: none;
    background-color: transparent;
    color: ${STYLES.colors.colorWhite};
    font-size: 1.6rem;
    cursor: pointer;
  }

  .btn-favorite {
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
  }

  .details-container {
    display: flex;
    list-style: none;
    margin-top: 0.8rem;
  }

  .details-container__item {
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

  .details-container__item:not(:last-child)::after {
    content: '•';
    margin-right: 4px;
  }

  .details-container__item--type {
    text-transform: uppercase;
  }

  .name {
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }
`;
export default ListCard;
